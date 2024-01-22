import React from 'react'
import { createRoot } from 'react-dom/client'
import MenuItem from './MenuItem'

const root = createRoot(document.querySelector('#root'))

const App = () => {
	return (
		<>
			<MenuItem text="DevMentor :)" url="https://devmentor.pl/" />
			<MenuItem text="Kontakt DevMentor :)" url="https://devmentor.pl/kontakt" />
		</>
	)
}

root.render(<App />)
