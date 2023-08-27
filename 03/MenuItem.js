import React from 'react';

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

export default MenuItem;
