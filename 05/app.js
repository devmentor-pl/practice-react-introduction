import React from "react";
import Nav from "../04/Nav";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

const App = () => {
  return (
    <>
      <Nav />
    </>
  );
};

root.render(<App />);
