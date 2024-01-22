import React from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header'

const root = createRoot(document.querySelector('#root'))

const HeaderFn = () => {
	return <Header />
}

// class HeaderCl extends React.Component {
// 	render() {
// 		return <Header />
// 	}
// }

root.render(<HeaderFn />)
// root.render(<HeaderCl />)
