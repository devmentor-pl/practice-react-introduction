import React from "react";
import Menu from "./Menu";

const menuArr = [
  { text: "strona główna", url: "/" },
  { text: "www", url: "/www" },
];

const Nav = () => {
  return (
    <nav>
      <Menu menuArr={menuArr} />
    </nav>
  );
};

export default Nav;
