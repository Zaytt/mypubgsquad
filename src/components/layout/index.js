import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function index({ children }) {
  return (
    <div className="root">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
