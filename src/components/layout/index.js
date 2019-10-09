import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export default function index({ children, title }) {
  if (!title) title = 'PUBG Squad Stats, Season Stats & Matches | MYPUBGSQUAD.com';
  return (
    <div className="root light-gray">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
