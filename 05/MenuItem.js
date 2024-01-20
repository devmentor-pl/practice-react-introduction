import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({url, text}) => {
  return (
    <li>
      <a href={url}>{text}</a>
    </li>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MenuItem;
