import React from "react";
import ReactDOM from "react-dom";

const H1 = () => <h1>React działa!</h1>;

const App = () => {
	return (
			<H1></H1>
	);
};
ReactDOM.render(<App></App>, document.querySelector("#root"));
