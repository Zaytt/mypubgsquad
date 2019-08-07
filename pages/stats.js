import React, { Component } from 'react';
import Layout from '../components/layout';
import Dashboard from '../components/stats_page';

export default class stats extends Component {
  static async getInitialProps({ query, res }) {
    return { squad: query.squad };
  }

  render() {
    return (
      <Layout>
        <Dashboard squad={this.props.squad} test="test" />
      </Layout>
    );
  }
}
