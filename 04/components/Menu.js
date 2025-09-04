import React from "react";
import MenuItem from "./MenuItem";

const Menu = (props) => {
  const { home, products, contact } = { ...props };
  return (
    <ul>
      <MenuItem {...home} />
      <MenuItem {...products} />
      <MenuItem {...contact} />
    </ul>
  );
};

export default Menu;
