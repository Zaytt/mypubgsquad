import React, { Component } from 'react';
import Layout from '../components/layout';
import Dashboard from '../components/dashboard_page';

export default class dashboard extends Component {
  render() {
    return (
      <Layout title={'Dashboard and Avanced Stats | MYPUBGSQUAD.com'}>
        <Dashboard />
      </Layout>
    );
  }
}
