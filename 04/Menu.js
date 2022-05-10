import React from 'react';
import MenuItem from './../03/MenuItem';

class Menu extends React.Component {
    render() {
        const {items} = this.props;
        return (
            <ul>
                {items.map(item => {
                    const {text, url} = item;
                    return <MenuItem text={text} url={url} />
                })}
            </ul>
        )
    }
}

export default Menu;