import React from "react";
import propTypes from "prop-types";

const MenuItem = ({ url, text }) => {
  return (
    <li>
      <a href={url}>{text}</a>
    </li>
  );
};

MenuItem.propTypes = {
  url: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default MenuItem;
