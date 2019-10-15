import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Dashboard extends Component {
  render() {
    return (
      <div className="pt-5 container text-center full-height">
        <h1 className="display-4 mb-5">Welcome to your dashboard</h1>
        <p>Thank you for registering to MYPUBGSQUAD!</p>
        <p>
          Soon here you will be able to access more and better stats to measure your squad's
          performance.
        </p>
        <p>Stay tuned!</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
