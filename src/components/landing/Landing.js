import React, { Component } from 'react';
import SearchInputGroup from '../common/SearchInputGroup';

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="landing">
          <div className="dark-overlay text-light">
            <div className="container clear-top mt-4">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-1 mb-0 main-title text-center pubg-font">
                    <span className="text-white">MY</span>
                    <span className="text-warning">PUBG</span>
                    <span className="text-white">SQUAD</span>
                  </h1>
                  <p className="landing-text lead mb-5">
                    Squad based statistics for you and your team
                  </p>

                  <div className="row d-flex justify-content-center">
                    <div className="col-md-8 text-center ">
                      <SearchInputGroup
                        placeholder="Your Teammates names"
                        name="squadSearch"
                        icon=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
