import React from "react";
import ReactDOM from "react-dom";
import MenuItems from "./components/MenuItems";

ReactDOM.render(
    <MenuItems text="kontakt" url ="/contact/"/>,
    document.querySelector('#root') 
);