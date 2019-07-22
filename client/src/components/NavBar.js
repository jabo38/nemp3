import '../style/navbar.css';
import { Link, NavLink, withRouter } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { fetchCatalogue, fetchUser, logOut, toastSuccess } from '../actions';
import DashNavbar from './dashboard/DashNavbar';
import FontAwesome from 'react-fontawesome';
import Logo from './Logo';
import PrivateRoute from './PrivateRoute';
import SearchBar from './SearchBar';
import classNames from 'classnames';
import { connect } from 'react-redux';
import throttle from 'lodash.throttle';

const NavBar = props => {
  const {
    user: { auth, credit, isLoading }
  } = props;

  const [showLogo, setShowLogo] = useState(false);
  const navBar = useRef();

  useEffect(() => {
    document.addEventListener('scroll', throttle(handleScroll, 200));

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  });

  const handleLogout = () => {
    props.logOut(res => {
      props.history.push('/login');
      props.fetchUser();
      props.toastSuccess(res.data.success);
    });
  };

  const handleScroll = () => {
    const navbarPos = navBar.current && navBar.current.offsetTop;
    const scrollPos = window.pageYOffset;

    if (scrollPos < navbarPos) {
      setShowLogo(false);
    } else {
      setShowLogo(true);
    }
  };

  const navbarClass = classNames('navbar-nav', {
    loaded: !isLoading
  });

  const brandClass = classNames('nav-link', {
    hide: !showLogo,
    show: showLogo
  });

  const creditClass = classNames('ml-1', 'credit', {
    cyan: credit > 1,
    yellow: credit === 1,
    red: credit === 0
  });

  const renderDashNav = () => {
    if (props.history.location.pathname.includes('/dashboard')) {
      return <PrivateRoute path="/dashboard" component={DashNavbar} />;
    }

    return (
      <li className="nav-item">
        <NavLink
          to={'/dashboard'}
          className="nav-link"
          title="Visit your dashboard."
        >
          <FontAwesome name="user-circle" className="mr-1" />
          <span className="nav-label">Dashboard</span>
        </NavLink>
      </li>
    );
  };

  const renderNav = () => {
    if (!auth) {
      return (
        <li className="nav-item">
          <NavLink to={'/login'} className="nav-link">
            <FontAwesome
              name="sign-in"
              className="mr-1"
              title="Click to log in."
            />
            <span className="nav-label">Log In</span>
          </NavLink>
        </li>
      );
    }

    return (
      <>
        <li className="nav-item">
          <NavLink
            to={'/release/add/'}
            className="nav-link"
            title="Add a new release."
          >
            <FontAwesome name="plus-square" className="mr-1" />
            <span className="nav-label">Add Release</span>
            <FontAwesome
              name="certificate"
              className={creditClass}
              title={`Your nemp3 credit balance is: ${credit}`}
            />{' '}
          </NavLink>
        </li>
        {renderDashNav()}
        <li className="nav-item">
          <button className="nav-link" onClick={handleLogout}>
            <FontAwesome
              name="sign-out"
              className="mr-1"
              title="Log out of your account."
            />
            <span className="nav-label">Log out</span>
          </button>
        </li>
      </>
    );
  };

  if (isLoading) return null;

  return (
    <nav className="navbar navbar-expand-lg sticky-top" ref={navBar}>
      <ul className={navbarClass}>
        <SearchBar />
        <li className="nav-item mr-auto">
          <Link to={'/'} className={brandClass}>
            <Logo class="navbar-brand" />
          </Link>
        </li>
        {renderNav()}
      </ul>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { fetchCatalogue, fetchUser, logOut, toastSuccess }
  )(NavBar)
);
