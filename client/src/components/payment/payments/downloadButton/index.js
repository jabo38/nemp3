import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './downloadButton.module.css';

const DownloadButton = props => {
  const {
    formatExists,
    handleDownload,
    hasPurchased,
    isPreparingDownload,
    releaseTitle
  } = props;

  const renderButtonText = () => {
    if (isPreparingDownload) {
      return (
        <>
          <FontAwesome name="cog" spin className="mr-2" />
          Preparing download…
        </>
      );
    }

    return (
      <>
        <FontAwesome name="download" className="download mr-2" />
        Download <span className={styles.title}>{releaseTitle}</span>
      </>
    );
  };

  const renderNote = () => {
    if (isPreparingDownload && !formatExists) {
      return (
        <>
          <p className="mt-3 mb-2">
            <FontAwesome name="info-circle" className="cyan mr-2" />
            This can take a little while if we don&rsquo;t have your chosen
            format cached, as we&rsquo;ll freshly transcode the release from
            source, before building your archive.
          </p>
          <p>
            A download prompt will pop up when it&rsquo;s ready. You&rsquo;re
            free to continue browsing around the site while you wait.
          </p>
        </>
      );
    }
  };

  if (hasPurchased) {
    return (
      <div className={styles.downloadGroup}>
        <button
          className={`${styles.download} btn btn-outline-primary btn-lg`}
          disabled={isPreparingDownload === true}
          onClick={handleDownload}
        >
          {renderButtonText()}
        </button>
        <p className="text-center">
          <span className={styles.title}>{releaseTitle}</span> has been added to{' '}
          <Link to={'/dashboard/collection'}>your collection</Link>.
        </p>
        {renderNote()}
      </div>
    );
  }

  return null;
};

DownloadButton.propTypes = {
  formatExists: PropTypes.bool,
  handleDownload: PropTypes.func,
  hasPurchased: PropTypes.bool,
  isPreparingDownload: PropTypes.bool,
  releaseTitle: PropTypes.string
};

export default DownloadButton;
