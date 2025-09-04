import React from "react";
import Menu from "./Menu";
const props = {
  home: {
    id: 1,
    text: "Home",
    url: "/",
  },
  products: {
    id: 2,
    text: "Products",
    url: "/products",
  },
  contact: {
    id: 3,
    text: "Contact",
    url: "/contact",
  },
};

const Nav = () => {
  return (
    <nav>
      <Menu {...props} />
    </nav>
  );
};

export default Nav;
