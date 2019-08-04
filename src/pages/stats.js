import React, { Component } from 'react';
import Layout from '../components/layout';
// import Dashboard from '../components/stats';
import { useRouter } from 'next/router';

export default function Stats() {
  const router = useRouter();
  const { squad } = router.query;
  console.log(squad);
  return <Layout>slug</Layout>;
}
