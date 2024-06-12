'use strict';
import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
  const { text, url } = props;
  return (
    <li>
      <a url={url}>{text}</a>
    </li>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MenuItem;
