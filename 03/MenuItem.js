'use strict';
import React from 'react';
const MenuItem = (props) => {
  const { text, url } = props;
  return (
    <li>
      <a url={url}>{text}</a>
    </li>
  );
};

export default MenuItem;
