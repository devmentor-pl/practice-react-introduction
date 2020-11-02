import React from "react";

export default function MenuItem(props) {
  return (
    <li>
      <a href={props.url}>{props.text}</a>
    </li>
  );
}
