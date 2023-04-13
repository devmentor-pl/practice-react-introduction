import React from "react";

const MenuItem = props => {
	const { text } = props;
	const { url } = props;
	return (
		<li>
			<a href={url}>{text}</a>
		</li>
	);
};

export default MenuItem;
