import React from "react";
import ReactDOM from "react-dom";
import MenuItem from "./components/MenuItem";

const Menu = () => {
  return (
    <ul>
      <MenuItem text="home" url="/" />
      <MenuItem text="kontakt" url="/contact" />
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

const NavMenu = () => <Nav />;

ReactDOM.render(<NavMenu />, document.querySelector("#root"));
