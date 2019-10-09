import React from 'react';
import Layout from '../components/layout/';
import Register from '../components/register_page';
import Page from '../components/page';

export default class RegisterPage extends Page {
  static async getInitialProps({ req, res }) {
    let props = await super.getInitialProps({ req });
    return props;
  }
  render() {
    const { props } = this.props;
    return (
      <Layout>
        <Register {...props} />
      </Layout>
    );
  }
}
