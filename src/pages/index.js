import React, { Component } from 'react';
import Layout from '../components/layout';
import Landing from '../components/landing';
// import '../static/css/App.css';

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <Landing />
      </Layout>
    );
  }
}
