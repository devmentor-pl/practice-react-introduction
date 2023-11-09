import React from 'react';
import Menu from './Menu';

const ulEl = {
  display: 'flex',
  backgroundColor: '#1d3557',
};

export const Nav = () => {
  return (
    <ul style={ulEl}>
      <Menu text='home' url='/' />
      <Menu text='kontakt' url='/contact' />
    </ul>
  );
};

export default Nav;
