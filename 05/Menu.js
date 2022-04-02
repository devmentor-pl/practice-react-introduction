import React from "react";
import ReactDOM from "react-dom";
import { MenuItem } from "../03/MenuItem";

/*export class Menu extends React.Component {
    render() {
        return (
            <ul>
                <MenuItem text="home" url="/" />
                <MenuItem text="kontakt" url="/contact" />
            </ul>
        );
    }
}*/

export class Menu extends React.Component {
    render() {
        const arr = this.props.items;
        return (
            <ul>
                {arr.map((m) => (
                    <MenuItem text={m.text} url={m.url} />
                ))}
            </ul>
        );
    }
}
