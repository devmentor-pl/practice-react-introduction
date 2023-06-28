import React from "react";
import MenuItem from "./MenuItem";
const Menu = () => {
  return (
    <ul>
      <MenuItem
        listItemClass="list-item"
        listItemlink="/"
        listItemLinkText="Home"
      />
      <MenuItem
        listItemClass="list-item"
        listItemlink="/contact"
        listItemLinkText="Kontakt"
      />
    </ul>
  );
};

export default Menu;
