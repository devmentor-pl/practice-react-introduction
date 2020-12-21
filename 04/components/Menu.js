import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../../03/components/MenuItem';
const Menu = () => {
  return (
    <ul>
      <MenuItem text='home' url='/' />
      <MenuItem text='kontakt' url='/contact' />
    </ul>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Menu;
