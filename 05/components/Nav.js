import React from "react";
import Menu from "./Menu";

const Nav = () => (
	<nav>
		<Menu
			items={[
				{ text: "strona główna", url: "/" },
				{ text: "www", url: "/www" },
			]}
		></Menu>
	</nav>
);
export default Nav;
