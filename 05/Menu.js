import React from "react";
import MenuItem from "../03/MenuItem";
import PropTypes from "prop-types";

const Menu = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => (
        <MenuItem text={item.text} url={item.url} key={index} />
      ))}
    </ul>
  );
};

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
};

export default Menu;
