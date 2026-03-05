import React from "react";
import { createRoot } from "react-dom/client";

import MenuItem from "./src/components/MenuItem";

const root = createRoot(document.querySelector("#root"));

const Menu = () => {
  return (
    <ul>
      <li>
        <a href="home">home</a>
      </li>
      <li>
        <a href="contact">kontakt</a>
      </li>
    </ul>
  );
};

const Nav = () => {
  return (
    <nav>
      <Menu />
    </nav>
  );
};

const App = () => {
  return (
    <>
      <MenuItem text="home" url="/" />
      <MenuItem text="kontakt" url="/contact" />
    </>
  );
};

root.render(<App />);
