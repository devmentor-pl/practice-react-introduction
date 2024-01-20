import React from "react";
import ReactDOM from "react-dom";
import MenuItem from "./../03/src/components/MenuItem";

class Nav extends React.Component {
    render () {
        return (
            <nav>
                <Menu />
            </nav>
        )
    }
}

class Menu extends React.Component {
    render () {
        return (
            <ul>
                <MenuItem text="home" url="/" />
                <MenuItem text="kontakt" url="/contact" />
            </ul>
        )
    }
}

const App = () => {
    return (
        <div>
            <Nav />
        </div>
    );
};

const root = document.querySelector("#root");

ReactDOM.render(<App />, root);




