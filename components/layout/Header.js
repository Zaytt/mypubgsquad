import React, { Component } from 'react';
import Link from 'next/link';
import SearchInputGroup from '../common/SearchInputGroup';
import '../../static/fonts/HeadlinerNo45.ttf';
import '../../static/css/style.css';

class Header extends Component {
  renderGuestLinks = () => (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ml-3 text-center d-block d-sm-none">
        <Link href="/">
          <a className="nav-link text-muted">Home</a>
        </Link>
      </li>
      <li className="nav-item ml-3 text-center">
        <Link href="/register">
          <a className="nav-link text-muted d-inline-block text-nowrap ">Sign Up</a>
        </Link>
      </li>
      <li className="nav-item ml-3 text-center ">
        <Link href="/login">
          <a className="nav-link text-muted">Login</a>
        </Link>
      </li>
    </ul>
  );

  render() {
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
            {this.renderGuestLinks()}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
