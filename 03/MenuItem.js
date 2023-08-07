import React from 'react';
const MenuItem = function (props) {
  return (
    <ul>
      <li>
        <a>{props.text}</a>
      </li>
      <li>
        <a>{props.url}</a>
      </li>
    </ul>
  );
};

export default MenuItem;
