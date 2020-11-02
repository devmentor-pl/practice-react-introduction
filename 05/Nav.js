import React from "react";
import Menu from "./Menu";

const Nav = () => (
  <nav>
    <Menu
      items={[
        { text: "home", url: "/" },
        { text: "kontakt", url: "/contact" },
      ]}
    />
  </nav>
);

export default Nav;
