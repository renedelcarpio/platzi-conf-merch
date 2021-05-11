import React from 'react';

import '../styles/components/Layout.css';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ clildren }) => {
  return (
    <div className="main">
      <Header />
      {clildren}
      <Footer />
    </div>
  );
};

export default Layout;
