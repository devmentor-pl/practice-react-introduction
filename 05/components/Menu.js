import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
    render() {
        return (
            <ul>
                { this.props.itemList.map(item => <MenuItem {...item} />) }
            </ul>
        );
    };
};

export default Menu;