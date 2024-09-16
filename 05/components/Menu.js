import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
	render() {
		const { items } = this.props;
		const menuList = items.map((item) => (
			<MenuItem url={item.url} text={item.text} />
		));

		return <ul>{menuList}</ul>;
	}
}

export default Menu;
