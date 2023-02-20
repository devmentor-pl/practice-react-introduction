import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

const HeaderFn = () => {
	return <header style={myStyles}>Moja pierwsza strona w React</header>;
};

class HeaderCl extends React.Component {
	render() {
		return <header style={myStyles}>Moja pierwsza strona w React</header>;
	}
}

const myStyles = {
	padding: '20px 0',
	marginBottom: '10px',
	fontFamily: 'Arial',
	fontSize: '32px',
	fontWeight: 700,
	backgroundColor: '#333',
	color: '#eee',
	textAlign: 'center',
};

root.render(
	<>
		<HeaderCl />
		<HeaderFn />
	</>
);
