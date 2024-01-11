import React from "react";
import { createRoot } from 'react-dom/client';
import PropTypes from 'prop-types'
import MenuItem from "../03/MenuItem";

class Menu extends React.Component {
    render() {
        <ul>
            <MenuItem text="home" url="/" />
            <MenuItem text="kontakt" url="/contact" />
        </ul>

    }
}
export default Menu;