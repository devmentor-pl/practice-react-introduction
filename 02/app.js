import React from "react";
import { createRoot } from "react-dom/client";
import HeaderFn from "./components/HeaderFn";
import HeaderCl from "./components/HeaderCl";

const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    <HeaderFn text="Moja pierwsza strona w React" />
    <HeaderFn text="This is a function component" />
    <HeaderCl text="This is a class component" />
  </>
);
