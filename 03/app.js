import React from 'react';
import { createRoot } from 'react-dom/client';
import MenuItem from './components/MenuItem';

const root = createRoot(document.querySelector('#root'));

const App = () => {
	return (
		<ul>
			<MenuItem url='/about-me/' text='o mnie' />
			<MenuItem url='/portfolio/' text='portfolio' />
			<MenuItem url='/skills/' text='umiejętności' />
			<MenuItem url='/contact/' text='kontakt' />
		</ul>
	);
};

root.render(<App />);
