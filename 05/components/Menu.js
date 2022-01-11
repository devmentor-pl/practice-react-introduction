import React from "react";
// import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

const Menu = () => {
  const arr = [
    { text: "strona główna", url: "/" },
    { text: "www", url: "/www" },
  ];

  const arrMap = arr.map((item, index) => (
    <li key={index}>
      <a href={item.url}>{item.text}</a>
    </li>
  ));
  const ulElement = <ul>{arrMap}</ul>;

  return <React.Fragment>{ulElement}</React.Fragment>;
};

export default Menu;
