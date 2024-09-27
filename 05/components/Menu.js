import React from "react";
import MenuItem from "../../03/MenuItem";

const Menu = props => {
	const { items } = props;

	const itemsArray = items.map(item => (
		<MenuItem text={item.text} url={item.url} />
	));

	return <ul>{itemsArray}</ul>;
};

export default Menu;
