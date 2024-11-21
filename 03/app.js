import React from "react";
import MenuItem from "./MenuItem";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

root.render(
  <MenuItem
    listItemLinkText="list item 1"
    listItemlink="#"
    listItemClass="list-item"
  />
);
