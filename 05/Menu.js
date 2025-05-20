import React from "react";

export const Menu = ({ items }) => {
  return (
    <>
      {items.map((item, i) => (
        <li key={i}>
          <a href={item.url}>{item.text}</a>
        </li>
      ))}
    </>
  );
};
