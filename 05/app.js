import React from "react";
import { createRoot } from "react-dom/client";

import Nav from "./src/components/Nav";

const root = createRoot(document.querySelector("#root"));

const itemsToRender = [
  { text: "home", url: "/" },
  { text: "kontakt", url: "/contact" },
];

const App = () => {
  return (
    <>
      <Nav items={itemsToRender} />
    </>
  );
};

root.render(<App />);
