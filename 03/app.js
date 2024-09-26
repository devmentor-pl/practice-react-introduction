import React from "react";
import ReactDOM  from "react-dom";
import MenuItem from "./MenuItem";

ReactDOM.render(
    <ul>
        <MenuItem text="item" url="itemurl"></MenuItem>
        <MenuItem text="item" url="itemurl"></MenuItem>
        <MenuItem text="item" url="itemurl"></MenuItem>
    </ul>,
    document.querySelector('#root')
)
