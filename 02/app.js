import React from "react";
import { createRoot } from "react-dom/client";
import HeaderFn from "./components/HeaderFn";
import HeaderCl from "./components/HeaderCl";

const root = createRoot(document.querySelector("#root"));

const App = () => {
	return (
		<>
			<HeaderFn />
			<HeaderCl />
		</>
	);
};

root.render(<App />);
