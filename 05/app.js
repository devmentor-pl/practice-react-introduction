import React from "react";
import ReactDOM from "react-dom";
import { Nav } from "./Nav";

class App extends React.Component {
    render() {
        return <Nav />;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
