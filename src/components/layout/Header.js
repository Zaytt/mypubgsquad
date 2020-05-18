import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import SearchInputGroup from '../common/SearchInputGroup';
import '../../static/fonts/HeadlinerNo45.ttf';
import '../../static/css/style.css';

class Header extends Component {
  logout = () => {
    this.props.logoutUser();
    Router.push('/');
  };

  // render links for not auth users
  renderGuestLinks = () => (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ml-3 text-center d-block d-sm-none">
        <Link href="/">
          <a className="nav-link text-light">Home</a>
        </Link>
      </li>
      {/* <li className="nav-item ml-3 text-center">
        <Link href="/register">
          <a className="nav-link text-light d-inline-block text-nowrap ">Sign Up</a>
        </Link>
      </li>
      <li className="nav-item ml-3 text-center ">
        <Link href="/login">
          <a className="nav-link text-light">Login</a>
        </Link>
      </li> */}
    </ul>
  );

  // render links for authenticated users
  renderAuthLinks = () => (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ml-3 text-center d-block d-sm-none">
        <Link href="/">
          <a className="nav-link text-light">Home</a>
        </Link>
      </li>
      <li className="nav-item ml-3 text-center">
        <Link href="/dashboard">
          <a className="nav-link text-light d-inline-block text-nowrap ">My Stats</a>
        </Link>
      </li>
      <li className="nav-item ml-3 text-center ">
        <a className="nav-link text-light" style={{ cursor: 'pointer' }} onClick={this.logout}>
          Logout
        </a>
      </li>
    </ul>
  );

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <nav className="topbar navbar navbar-expand-sm navbar-dark bg-dark py-1">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand font-weight-light mt-1 d-none d-sm-block pubg-font">
              <span className="text-white">MY</span>
              <span className="text-warning">PUBG</span>
              <span className="text-white">SQUAD</span>
            </a>
          </Link>
          <div className="d-flex flex-nowrap w-100">
            <div className="mx-auto search-bar-container">
              <SearchInputGroup placeholder="Search Players" name="squadSearch" navbar />
            </div>

            <button
              className="navbar-toggler ml-2"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>

          <div className="collapse navbar-collapse" id="mobile-nav">
            {isAuthenticated ? this.renderAuthLinks() : this.renderGuestLinks()}
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
