import React from 'react';
import Router from 'next/router';
import Login from '../components/login_page';
import Layout from '../components/layout/';
import Page from '../components/page/Page';

export default class LoginPage extends Page {
  static async getInitialProps({ req, res }) {
    let props = await super.getInitialProps({ req });

    // If theres a user logged in, redirect him to the dashboard
    if (props.user) {
      if (res) {
        res.writeHead(302, {
          Location: '/dashboard'
        });
        res.end();
      } else {
        Router.push('/dashboard');
      }
    }
    return props;
  }

  render() {
    return (
      <Layout>
        <Login />
      </Layout>
    );
  }
}
