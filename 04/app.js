import React from 'react';
import ReactDom from 'react-dom';
import MenuItem from '../03/components/MenuItem';

const Nav = () => {
	return (
		<nav>
			<Menu />
		</nav>
	);
};
const Menu = () => {
	return (
		<ul>
			<MenuItem text="home" url="/" />
			<MenuItem text="kontakt" url="/contact/" />
		</ul>
	);
};

ReactDom.render(<Nav />, document.querySelector('#root'));
