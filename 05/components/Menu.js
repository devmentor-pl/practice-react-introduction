import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
    render() {
        const itemList = this.props.items.map((item) => <MenuItem text={item.text} url={item.url}/>);
        return (
            <ul>
                {itemList}
            </ul>
        )
    }
}

export default Menu;