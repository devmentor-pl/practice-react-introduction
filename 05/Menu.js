import React from 'react';

import MenuItem from '../03/MenuItem';

class Menu extends React.Component {
    render() {
        const {items} = this.props;
        const list = items.map(item => {
            const {text, url} = item;
            return <MenuItem text={text} url={url}/>
        })

        return (
            <ul>
                {list}
            </ul>
        )
    }
}

export default Menu;