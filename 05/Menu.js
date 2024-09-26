import React from 'react';

import MenuItem from '../03/MenuItem';

class Menu extends React.Component {
    render() {
        const elements = this.props.items.map(item => {
            return <MenuItem text={item.text} url={item.url}/>
        })
        
        
        return (
            <ul>
                {elements}
            </ul>
        )
    }
}

export default Menu;