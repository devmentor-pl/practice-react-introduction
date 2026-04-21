import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

const HeaderFn = () => {
	return (
		<header style={{ color: 'blue', textTransform: 'uppercase' }}>
			<h1>Moja pierwsza strona w React</h1>
		</header>
	);
};

class HeaderCl extends React.Component {
	render() {
		return (
			<header style={{ color: 'green', textDecoration: 'underline' }}>
				<h1>Moja pierwsza strona w React</h1>
			</header>
		);
	}
}

root.render(
	<>
		<HeaderFn />
		<HeaderCl />
	</>,
);
