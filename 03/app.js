import React from "react";
import {createRoot} from "react-dom/client";
import MenuItem from "./MenuItem.js"

const root = createRoot(document.querySelector("#root"));

const itemData = {text: "kontakt", url: "/contact"}
const ItemEl = () => <MenuItem {...itemData} />
root.render(<ItemEl />)