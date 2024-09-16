import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../04/Menu';

const ulEl = {
  display: 'flex',
  backgroundColor: '#1d3557',
};

export const Menu05 = ({ items }) => {
  const arr = items.map((item) => {
    return <Menu text={item.text} url={item.url} />;
  });
  return <ul style={ulEl}>{arr}</ul>;
};

Menu.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Menu05;
