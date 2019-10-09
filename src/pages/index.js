import React, { Component } from 'react';
import Layout from '../components/layout';
import Landing from '../components/landing_page';
import Page from '../components/page';

export default class Home extends Page {
  render() {
    return (
      <Layout title={'PUBG Squad Stats, Season Stats & Matches | MYPUBGSQUAD.com'}>
        <Landing />
      </Layout>
    );
  }
}
