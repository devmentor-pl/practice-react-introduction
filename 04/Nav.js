'use strict';
import React from 'react';
import Menu from './Menu';

const Nav = () => {
  const menuItems = [
    { text: 'strona główna', url: '/' },
    { text: 'www', url: '/www' },
  ];
  return (
    <nav>
      <Menu menuItems={menuItems} />
    </nav>
  );
};

export default Nav;
