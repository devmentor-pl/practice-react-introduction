import React from "react";
import ReactDOM from "react-dom";
import { Menu } from "./Menu";

/*export class Nav extends React.Component {
    render() {
        return (
            <nav>
                <Menu />
            </nav>
        );
    }
}*/

export class Nav extends React.Component {
    render() {
        return (
            <nav>
                <Menu
                    items={[
                        { text: "strona główna", url: "/" },
                        { text: "www", url: "/www" },
                    ]}
                />
            </nav>
        );
    }
}
