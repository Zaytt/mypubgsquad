import React from 'react';
import PropTypes from 'prop-types';
import { sanitizeString } from '../../util/Util';
import Link from 'next/link';
import Router from 'next/router';

class SearchInputGroup extends React.Component {
  state = {
    squadSearch: '',
    error: null
  };

  componen;
  routeChange = e => {
    e.preventDefault();

    const squadSearch = this.filterString(this.state.squadSearch);
    if (squadSearch.split(',').length > 10 || squadSearch.split(',').length < 2) {
      this.setState({ error: 'Player Search must be between 2 and 10 players' });
      return;
    } else {
      this.setState({ squadSearch: squadSearch, error: null });
      const path = `/stats/${squadSearch}`;
      Router.push(path);
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  filterString = str => {
    return sanitizeString(this.state.squadSearch)
      .split(/[ ,]+/)
      .filter(Boolean)
      .join(',');
  };

  render() {
    let { placeholder, value, type, navbar } = this.props;
    const { squadSearch, error } = this.state;
    if (navbar) {
      return (
        <div className="d-flex justify-content-center">
          <form
            className="form-inline nav-bar-search-form d-flex justify-content-center"
            onSubmit={this.routeChange}
            autoComplete="new-password"
          >
            <div className="input-group nav-bar-input-group">
              <input
                className={`form-control ${error ? 'is-invalid' : 'border border-dark '}`}
                type="search"
                name="squadSearch"
                placeholder={placeholder}
                aria-label="Search"
                value={squadSearch}
                onChange={this.onChange}
                ref="input1"
              />
              <div className="input-group-append" onClick={this.routeChange}>
                <span
                  className="input-group-text text-dark bg-warning border-dark"
                  style={{ cursor: 'pointer' }}
                >
                  <i className="fas fa-search" />
                </span>
              </div>
            </div>
          </form>
        </div>
      );
    } else
      return (
        <form onSubmit={this.routeChange}>
          <small className="form-text text-light mb-2">
            Type in up to 10 player names, separated by commas.
          </small>
          <div className="input-group mb-1">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-search" />
              </span>
            </div>

            <input
              className={`form-control form-control-lg myinput ${error ? 'is-invalid' : ''}`}
              type={type}
              placeholder={placeholder}
              name="squadSearch"
              value={value}
              onChange={this.onChange}
            />
          </div>
          {error && <div className="form-text text-danger">{error}</div>}
          <button className="btn btn-lg btn-warning mt-4" type="submit">
            Search Stats
          </button>
        </form>
      );
  }
}

SearchInputGroup.propTypes = {
  placeholder: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string
  // onChange: PropTypes.func.isRequired
};

SearchInputGroup.defaultProps = {
  type: 'text'
};

export default SearchInputGroup;
