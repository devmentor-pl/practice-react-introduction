import React from "react";
import Menu from "./Menu";
import PropTypes from "prop-types";

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

Nav.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};

export default Nav;
