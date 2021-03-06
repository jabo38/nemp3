import React, { useEffect, useState } from 'react';
import {
  deleteRelease,
  fetchSales,
  fetchUserReleases,
  publishStatus,
  toastSuccess,
  toastWarning
} from 'actions';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from 'components/spinner';
import UserRelease from './userRelease';
import { connect } from 'react-redux';
import styles from './userReleases.module.css';

function UserReleases(props) {
  const {
    deleteRelease,
    fetchSales,
    fetchUserReleases,
    history,
    publishStatus,
    toastSuccess,
    toastWarning,
    userReleases
  } = props;

  const [isLoading, setLoading] = useState(false);
  const [salesData, setSalesData] = useState();

  useEffect(() => {
    if (!userReleases.length) setLoading(true);
    fetchUserReleases().then(() => {
      setLoading(false);
    });
  }, [fetchUserReleases, userReleases.length]);

  useEffect(() => {
    const handleFetch = async () => {
      const data = await fetchSales();
      setSalesData(data);
    };
    handleFetch();
  }, [fetchSales]);

  const releasesOffline = () => {
    if (!userReleases) return;

    const offline = userReleases.filter(release => release.published === false);
    return offline.length;
  };

  const renderUserReleases = () =>
    userReleases.map(release => {
      const sales =
        salesData &&
        salesData.filter(datum => datum.releaseId === release._id)[0];

      return (
        <UserRelease
          deleteRelease={deleteRelease}
          history={history}
          key={release._id}
          publishStatus={publishStatus}
          numSold={sales && sales.purchases.length}
          release={release}
          toastSuccess={toastSuccess}
          toastWarning={toastWarning}
          userReleases={userReleases}
        />
      );
    });

  if (isLoading) {
    return (
      <Spinner>
        <h2>Loading releases&hellip;</h2>
      </Spinner>
    );
  }

  if (!userReleases.length) {
    return (
      <main className="container">
        <div className="row">
          <div className="col p-3">
            <h3 className="text-center mt-4">Add your first release</h3>
            <p className="text-center">
              You don&rsquo;t currently have any releases for sale. Please hit
              the button below to add your first release.
            </p>
            <div className="d-flex justify-content-center">
              <Link
                className={`${styles.addRelease} btn btn-outline-primary btn-sm mt-5 mb-4`}
                title="Add Release"
                role="button"
                to={'/release/add/'}
              >
                <FontAwesome name="plus-circle" className="mr-2" />
                Add Release
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col py-3">
          <h3 className="text-center">
            You have {userReleases.length} release
            {userReleases.length > 1 ? 's' : ''}{' '}
            {releasesOffline() ? ` (${releasesOffline()} offline)` : null}
          </h3>
          <ul className={styles.releases}>{renderUserReleases()}</ul>
          <Link
            className={`${styles.addRelease} btn btn-outline-primary btn-sm`}
            title="Add Release"
            role="button"
            to={'/release/add/'}
          >
            <FontAwesome name="plus-circle" className="mr-2" />
            Add Release
          </Link>
        </div>
      </div>
    </main>
  );
}

function mapStateToProps(state) {
  return {
    salesData: state.salesData.releaseSales,
    userReleases: state.releases.userReleases
  };
}

UserReleases.propTypes = {
  deleteRelease: PropTypes.func,
  fetchSales: PropTypes.func,
  fetchUserReleases: PropTypes.func,
  history: PropTypes.object,
  publishStatus: PropTypes.func,
  toastSuccess: PropTypes.func,
  toastWarning: PropTypes.func,
  userReleases: PropTypes.array
};

export default connect(
  mapStateToProps,
  {
    deleteRelease,
    fetchSales,
    fetchUserReleases,
    publishStatus,
    toastSuccess,
    toastWarning
  }
)(UserReleases);
