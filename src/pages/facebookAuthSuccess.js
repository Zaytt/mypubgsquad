import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticateFacebook } from '../redux/actions/authActions';

class FacebookAuthSuccess extends Component {
  static getInitialProps = ({ req, res }) => {
    if (req.query.code) {
      if (res) {
        res.writeHead(302, {
          Location: '/dashboard'
        });
        res.end();
      } else {
        Router.push('/dashboard');
      }
    }

    authenticateFacebook();
    return {};
  };
  render() {
    return <div />;
  }
}

export default connect(
  null,
  { authenticateFacebook }
)(FacebookAuthSuccess);
