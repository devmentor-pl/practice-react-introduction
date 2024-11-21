import React from "react";
import MenuItem from "./MenuItem";
const Menu = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <MenuItem
            key={index}
            url={item.url}
            text={item.text}
          />
        );
      })}
    </ul>
  );
};

export default Menu;
