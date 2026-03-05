import React from "react";

import MenuItem from "./MenuItem";

const Menu = (props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((item, index) => (
        <MenuItem key={index} text={item.text} url={item.url} />
      ))}
    </ul>
  );
};

export default Menu;
