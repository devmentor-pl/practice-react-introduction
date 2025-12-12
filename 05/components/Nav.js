import React from 'react';
import Menu from './Menu';

const Nav = () => {
	const items = [
		{ text: 'Strona główna', url: '/' },
		{ text: 'www', url: '/www' },
	];
	return (
		<nav>
			<Menu items={items} />
		</nav>
	);
};

export default Nav;
