import React from 'react';
import MenuItem from '../../03/components/MenuItem';

const Menu = ({ items }) => {
	return (
		<ul>
			{items.map((item) => (
				<MenuItem text={item.text} url={item.url} />
			))}
		</ul>
	);
};

export default Menu;
