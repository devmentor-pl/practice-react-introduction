import React from "react";
import MenuItem from "../03/MenuItem";

const Menu = ({ items }) => {
  const listItems = items.map(item => {
    return (
      <MenuItem text = {item.text} url = {item.url}/>
    )
  })

  return (
    <ul>
      {listItems}
    </ul>
  );
};

export default Menu;