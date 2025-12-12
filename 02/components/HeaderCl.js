import React from 'react';
export default class HeaderCl extends React.Component {
	render() {
		const style = {
			fontWeight: 700,
			fontSize: '28px',
			color: 'rgb(20,130,50)',
		};
		return <header style={style}>Mój komponent klasowy</header>;
	}
}
