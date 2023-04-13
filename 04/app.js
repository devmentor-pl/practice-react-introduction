import React from "react";
import { createRoot } from "react-dom/client";
import MenuItem from "./../03/MenuItem";

const root = createRoot(document.querySelector("#root"));

const item = {
	text1: "home",
	text2: "kontakt",
};

const url = {
	url1: "/",
	url2: "/contact",
};

const Menu = () => {
	return (
		<ul>
			<MenuItem url={url} item={item} />
		</ul>
	);
};

const Nav = () => {
	return (
		<nav>
			<Menu />
		</nav>
	);
};

root.render(<Nav />);
