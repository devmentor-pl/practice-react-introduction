import React from "react";
import ReactDOM from "react-dom";
import MenuItem from "./components/MenuItem";

ReactDOM.render(
    <ul>
        <MenuItem text="kontakt" url ="/contact/"/>
    </ul>,
    document.querySelector('#root') 
);