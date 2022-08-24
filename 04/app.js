import React from "react";
import ReactDOM from "react-dom";
import MenuItem from "../03/components/MenuItem";

const Nav = () => (
	<nav>
		<Menu></Menu>
	</nav>
);
const Menu = () => (
	<ul>
		<MenuItem text="home" url="/"></MenuItem>
		<MenuItem text="kontakt" url="/contact"></MenuItem>
	</ul>
);

const App = () => {
	return <Nav></Nav>;
};

ReactDOM.render(<App></App>, document.querySelector("#root"));
