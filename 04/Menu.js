'use strict';
import React from 'react';
import MenuItem from '../03/MenuItem';

const Menu = ({ menuItems }) => {
  return (
    <ul>
      {menuItems.map((menuItem, index) => (
        <MenuItem key={index} text={menuItem.text} url={menuItem.url} />
      ))}
    </ul>
  );
};

export default Menu;
