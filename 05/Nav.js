import React from 'react';
import Menu from './Menu';
import PropTypes from 'prop-types';

const Nav = () => {
  return (
    <nav>
      <Menu
        items={[
          {text: 'strona główna', url: '/'},
          {text: 'www', url: '/www'},
        ]}
      />
    </nav>
  );
};
Nav.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Nav;
