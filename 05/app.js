import React from "react";
import { createRoot } from 'react-dom/client';
import PropTypes from 'prop-types'
import MenuItem from "../03/MenuItem";
import Menu from "./Menu";
import Nav from "./Nav";

const root = createRoot(document.querySelector('#root'));

const App = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

root.render(<App/>)