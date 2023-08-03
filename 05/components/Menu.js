import React from "react";
import PropTypes from "prop-types";

import MenuItem from "../../03/MenuItem";

const Menu = ({ navLinks }) => {
  return (
    <ul>
      {navLinks.map((link, id) => (
        <MenuItem key={id} text={link.text} url={link.url} />
      ))}
    </ul>
  );
};

Menu.propTypes = {
  navLinks: PropTypes.array.isRequired,
};

export default Menu;
