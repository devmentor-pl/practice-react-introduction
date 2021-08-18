import React from "react";
import ReactDOM from "react-dom";
import { Menu } from "./Menu";

export class Nav extends React.Component {
    render() {
        return (
            <nav>
                <Menu />
            </nav>
        );
    }
}
