import React from "react";
import { createRoot } from "react-dom/client";
import MenuItem from "./components/MenuItem";

const root = createRoot(document.querySelector("#root"));

root.render(
  <ul>
    <MenuItem text="Home" url="/" />
    <MenuItem text="Products" url="/products" />
    <MenuItem text="Services" url="/services" />
    <MenuItem text="Contact" url="/contact" />
  </ul>
);
