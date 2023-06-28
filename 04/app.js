import React from "react";
import MenuItem from "../03/MenuItem";
import { createRoot } from "react-dom/client";

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

const Nav = () => {
  return (
    <nav>
      <Menu />
    </nav>
  );
};

const root = createRoot(document.querySelector("#root"));
root.render(<Nav />);
