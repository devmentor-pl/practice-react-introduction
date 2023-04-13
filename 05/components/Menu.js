import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
	render() {
		const { items } = this.props;

		const menuItems = items.map((item) => {
			return <MenuItem
				text={item.text}
				url={item.url}
			/>;
		});

		return <ul>{menuItems}</ul>;
	}
}

export default Menu;
