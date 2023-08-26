import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

const Header = () => {
	const styles = {
		padding: '10px',
		fontSize: '25px',
		borderBottom: '3px solid blue',
		color: 'gold',
	};
	return <header style={styles}> Moja pierwsza strona w React </header>;
};


// class Header extends React.Component {
// 	styles = {
// 		padding: '10px',
// 		fontSize: '25px',
// 		borderBottom: '3px solid blue',
// 		color: 'gold',
// 	};
// 	render() {
// 		return <header style={this.styles}>Moja pierwsza strona w React</header>;
// 	}
// }

root.render(<Header />);
