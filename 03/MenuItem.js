import React from "react";
import PropTypes from "prop-types";

const MenuItem = ({ url, text }) => {
  return (
    <li>
      <a href={url} target="_blank">
        {text}
      </a>
    </li>
  );
};

MenuItem.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuItem;
