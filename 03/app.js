import React from "react";
import ReactDOM from "react-dom";
import { MenuItem } from "./MenuItem";

class App extends React.Component {
    render() {
        return (
            <ul>
                <MenuItem text="kontakt" url="/contact" />
                <MenuItem text="kontakt" url="/contact" />
            </ul>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
