import React from "react";
import { createRoot } from "react-dom/client";
import Nav from "../04/components/nav";

const root = createRoot(document.querySelector("#root"));

root.render(<Nav />);
