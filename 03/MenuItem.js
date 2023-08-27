import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = function (props) {
  const { text, url } = props;
  return (
    <ul>
      <li>
        <a href={url} target="blank">
          {text}
        </a>
      </li>
    </ul>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MenuItem;
