import React from "react";

const Menu = (props) => {
	const arr = props.items.map(({ url, text }) => (
		<li>
			<a href={url}>{text}</a>
		</li>
	));
	return <ul>{arr}</ul>;
};
export default Menu;
