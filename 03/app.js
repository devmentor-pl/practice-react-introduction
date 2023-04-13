import React from 'react';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.querySelector('#root'));
import MenuItem from './components/MenuItem';

root.render(
	<MenuItem
		text='kontakt'
		url='/contact'
	/>
);
