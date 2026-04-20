import React from 'react';

export const MenuItem = ({ text, url }) => {
	return (
		<li>
			<a href={url}>{text}</a>
		</li>
	);
};
