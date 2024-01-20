import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";

ReactDOM.render(
    React.createElement('div', {className: "navigation"}, <Nav/>),
    document.querySelector('body'),
)