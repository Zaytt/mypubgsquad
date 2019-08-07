import React, { Component } from 'react';
import Layout from '../components/layout';
import Landing from '../components/landing_page';

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <Landing />
      </Layout>
    );
  }
}
