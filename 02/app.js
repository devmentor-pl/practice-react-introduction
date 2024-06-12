import React from 'react';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.querySelector('#root'));

const headerText = 'Moja pierwsza strona w React';
const headerStyle = {
	height: '80px',
	lineHeight: '80px',
	margin: '5px',
	backgroundColor: '#4b516f',
	textAlign: 'center',
	fontSize: '26px',
	color: 'lime',
	textShadow: '0 0 15px black',
	borderRadius: '8px',
};

const HeaderFn = (props) => {
	return <header style={props.style}>{props.text}</header>;
};

class HeaderCl extends React.Component {
	render() {
		return <header style={this.props.style}>{this.props.text}</header>;
	}
}

const App = () => (
	<React.Fragment>
		<HeaderFn
			text={headerText}
			style={headerStyle}
		/>
		<HeaderCl
			text={headerText}
			style={headerStyle}
		/>
	</React.Fragment>
);
root.render(<App />);
