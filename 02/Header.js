import React from 'react'
import HeaderStyles from './HeaderStyles'

// class Header extends React.Component {
// 	render() {
// 		return (
// 			<header>
// 				<h1 className="title">Moja pierwsza strona w React</h1>
// 			</header>
// 		)
// 	}
// }

const Header = () => {
	return (
		<header>
			<h1 style={HeaderStyles()} className="title">
				Moja pierwsza strona w React
			</h1>
		</header>
	)
}

export default Header
