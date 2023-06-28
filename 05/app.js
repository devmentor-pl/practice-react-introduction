import React from "react";
import { createRoot } from "react-dom/client";
// import MenuItem from "./MenuItem";
// import Menu from "./Menu";
import Nav from "./Nav";

const root = createRoot(document.querySelector("#root"));
root.render(<Nav />);
