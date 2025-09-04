import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <ul>
      {items.map(({ text, url }, index) => (
        <MenuItem key={index} url={url} text={text} />
      ))}
    </ul>
  );
};

export default Menu;
