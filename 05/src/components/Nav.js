import React from "react";
import PropTypes from "prop-types";

import Menu from "./Menu";

const Nav = (props) => {
  const { items } = props;

  console.log("itemsArr", items);
  return (
    <nav>
      <Menu items={items} />
    </nav>
  );
};

export default Nav;
