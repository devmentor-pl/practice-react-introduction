import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

// root.render(React.createElement('h1', null, 'React Działa!'));
const H1 = () => {
	return <h1 className='title'>React działa!</h1>;
};
const App = () => {
	return (
		<div>
			<H1 />
		</div>
	);
};
root.render(<App />);
