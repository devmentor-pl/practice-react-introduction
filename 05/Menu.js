import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../03/MenuItem';

class Menu extends React.Component {
    render() {
        const {items} = this.props
        const menuItems = items.map(item => {
            const {text, url} = item
            return <MenuItem text={text} url={url} />
        })
        return (
            <ul>
                {menuItems}
            </ul>
        )
    }
}

Menu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
}

export default Menu;