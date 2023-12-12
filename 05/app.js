import React from "react";
import ReactDOM from "react-dom";
import Nav from "./src/components/Nav";

const root = document.querySelector("#root");

const App = (props) => {
    const MenuItems = [
        {text: 'strona główna', url: '/'}, 
        {text: 'www', url: '/www'}
    ];

    return (
        <div>
            <Nav items={MenuItems} />
        </div>
    );
};

ReactDOM.render(<App />, root);