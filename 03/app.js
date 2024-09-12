import React from "react";
import ReactDOM from "react-dom";
import MenuItem from "./components/MenuItem";

const App = () => {
	return <MenuItem text="Kontakt" url="/contact"></MenuItem>;
};

ReactDOM.render(<App></App>, document.querySelector("#root"));
