import React from "react";
import { createRoot } from "react-dom/client";

import MenuItem from "./MenuItem";

const root = createRoot(document.querySelector("#root"));
root.render(<MenuItem text="twitter" url="https://twitter.com/"></MenuItem>);
