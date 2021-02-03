import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from "./MenuItem.js"

const Element = () => 
<MenuItem url="/contact" text="kontakt"/>;

ReactDOM.render(
    <Element/>,
    document.querySelector("#root")
)