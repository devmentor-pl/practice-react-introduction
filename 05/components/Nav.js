import React from "react";

import Menu from "./Menu";

const navLinks = [
  {
    text: "strona główna",
    url: "/",
  },
  {
    text: "www",
    url: "/www",
  },
];

const Nav = () => {
  return (
    <nav>
      <Menu navLinks={navLinks} />
    </nav>
  );
};

export default Nav;
