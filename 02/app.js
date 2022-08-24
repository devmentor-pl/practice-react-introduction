import React, { Component } from "react";
import ReactDOM from "react-dom";

const commonStyles = {
	fontFamily: "non-serif",
	textTransform: "uppercase",
	fontSize: "30px",
	textAlign: "center",
	padding: "100px",
	borderRadius: "30px",
};
const functionStyle = {
	backgroundColor: "blue",
	color: "white",
};
const classStyle = {
	backgroundColor: "limegreen",
};

const HeaderFN = () => (
	<header
		className="header_function"
		style={{ ...commonStyles, ...functionStyle }}
	>
		Moja pierwsza strona w React (funkcja)
	</header>
);

class HeaderCl extends Component {
	render() {
		return (
			<header
				className="header_class"
				style={{ ...commonStyles, ...classStyle }}
			>
				Moja pierwsza strona w React (klasa)
			</header>
		);
	}
}

const App = () => {
	return (
		<>
			<HeaderFN></HeaderFN>
			<HeaderCl></HeaderCl>
		</>
	);
};

ReactDOM.render(<App></App>, document.querySelector("#root"));
