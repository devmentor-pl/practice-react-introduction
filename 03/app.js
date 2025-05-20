import React from "react";
import { createRoot } from "react-dom/client";
import MenuItem from "./MenuItem";

const root = createRoot(document.querySelector('#root'));

const App = () => <MenuItem text="kontakt" url="/contact"/>

root.render(<App />)