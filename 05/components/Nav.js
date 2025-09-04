import React from "react";
import Menu from "./Menu";
const items = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Products",
    url: "/products",
  },
  {
    text: "Contact",
    url: "/contact",
  },
  {
    text: "www",
    url: "/www",
  },
];
const Nav = () => {
  return (
    <nav>
      <Menu items={items} />
    </nav>
  );
};

export default Nav;
