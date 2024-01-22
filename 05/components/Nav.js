import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';

const Nav = ({ menuItems }) => (
  <nav>
    <Menu items={menuItems} />
  </nav>
);

Nav.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Nav;
