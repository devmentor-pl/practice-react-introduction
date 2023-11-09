import React from 'react';
import PropTypes from 'prop-types';

const liEl = {
  listStyleType: 'none',
  padding: '20px',
  textAlign: 'center',
};

const myStyles = {
  textDecoration: 'underline overline #e63946',
  color: '#f1faee',
  letterSpacing: '2px',
  fontFamily: 'sans-serif',
  textTransform: 'uppercase',
};

export const Menu = ({ text, url }) => {
  return (
    <li style={liEl}>
      <a style={myStyles} href={url}>
        {text}
      </a>
    </li>
  );
};

Menu.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Menu;
