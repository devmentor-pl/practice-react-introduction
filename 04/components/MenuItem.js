import React from "react";

const MenuItem = (props) => {
  const { id, url, text } = { ...props };
  return (
    <li>
      <a id={id} href={url}>
        {text}
      </a>
    </li>
  );
};

export default MenuItem;
