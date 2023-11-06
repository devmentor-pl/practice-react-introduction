'use strict';
import React from 'react';
const MenuItem = (props) => {
  const { text, url } = props;
  return (
    <ul>
      <li>
        <a url={url}>{text}</a>
      </li>
    </ul>
  );
};

export default MenuItem;
