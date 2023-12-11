import React from "react";
import ReactDOM from "react-dom";
import MenuItem from "./src/components/MenuItem";

const root = document.querySelector("#root");

// Test
const test = { text: "Testowy link", url: "https://www.example.com" };

const App = () => {
    return (
        <div>
            <MenuItem item={test} />
        </div>
    );
};

ReactDOM.render(<App />, root);