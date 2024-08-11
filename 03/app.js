import React from "react"
import { createRoot } from "react-dom/client"
import MenuItem from "./MenuItem"

const root = createRoot(document.querySelector("#root"))

const App = () => (
	<div>
		<ul>
			<MenuItem text='Kontakt' url='/contact' />
			<MenuItem text='Home' url='/' />
			<MenuItem text='O nas' url='/about' />
		</ul>
	</div>
)
root.render(<App />)
