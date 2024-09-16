import React from 'react';
import Menu from './Menu';

class Nav extends React.Component {
	render() {
		return (
			<nav>
				<Menu
					items={[
						{ url: '/', text: 'home' },
						{ url: '/contact', text: 'kontakt' },
					]}
				/>
			</nav>
		);
	}
}

export default Nav;
