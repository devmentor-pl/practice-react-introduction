import React from "react";
import ReactDOM from "react-dom";
import MenuItem from "./MenuItem";

const App = () => {
    return (
        <>
            <MenuItem text={"kontakt"} url={"/contact"}/>
        </>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));