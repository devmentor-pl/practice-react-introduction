import React from "react";
import { createRoot } from "react-dom/client";
import MenuItem from "./src/MenuItem";

const root = createRoot(document.querySelector("#root"));

const item = { text: "kontakt", url: "/contact" };
const App = () => <MenuItem {...item} />;

root.render(<App />);


