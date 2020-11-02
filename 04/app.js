import React, { Component } from "react";
import ReactDOM from "react-dom";
import MenuItem from "../03/MenuItem";

const Menu = () => {
  return (
    <ul>
      <MenuItem text="home" url="/" />
      <MenuItem text="kontakt" url="/contact" />
    </ul>
  );
};

const Nav = () => (
  <nav>
    <Menu />
  </nav>
);

ReactDOM.render(<Nav />, document.getElementById("root"));
