import React from "react";
import { createRoot } from "react-dom/client";
import Nav from "./components/Nav";
Nav;

const root = createRoot(document.querySelector("#root"));
root.render(<Nav />);
