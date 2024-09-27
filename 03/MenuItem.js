import React from "react";

const MenuItem = ({ text, url }) => {
  const liStyle = {
    display: "inline-flex",
    alignItems: "center",
    flexDirection: "row",
  };
  const aStyle = {
    color: "white",
    textDecoration: "none",
    backgroundColor: "tomato",
    padding: "20px",
    margin: "30px",
  };

  return (
    <li style={liStyle}>
      <a style={aStyle} href={url}>
        {text}
      </a>
    </li>
  );
};

export default MenuItem;
