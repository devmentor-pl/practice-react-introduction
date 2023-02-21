import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

const HeaderFn = (props) => {
	const { styles } = props;
	return <header style={styles}>Moja pierwsza strona w React</header>;
};

class HeaderCl extends React.Component {
	render() {
		const { styles } = this.props;
		return <header style={styles}>Moja pierwsza strona w React</header>;
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
		<HeaderCl styles={myStyles} />
		<HeaderFn styles={myStyles} />
	</>
);
