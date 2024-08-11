import React from "react"
import { createRoot } from "react-dom/client"

const root = createRoot(document.querySelector("#root"))

const HeaderFn = () => {
	return (
		<header
			style={{
				color: "red",
				textDecoration: "underline",
			}}>
			Moja pierwsza strona w React
		</header>
	)
}

class HeaderCl extends React.Component {
	render() {
		return (
			<header
				style={{
					color: "blue",
					fontWeight: "bold",
				}}>
				Moja pierwsza strona w React
			</header>
		)
	}
}

const App = () => {
	return (
		<div>
			<HeaderFn />
			<HeaderCl />
		</div>
	)
}

root.render(<App />)
