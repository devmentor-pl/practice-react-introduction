import React, { useLayoutEffect } from 'react';
import { createRoot } from 'react-dom/client';

import MenuItem from './MenuItem';
const root = createRoot(document.querySelector('#root'));

const Menu = () => {
	return (
		<ul>
			{/* trzeba przyznac ze sprytne te budowanie kazdej rzeczy za pomoca komponentu klasy */}
			<MenuItem text='home' url='/' />
			<MenuItem text='contact' url='/contact' />
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

