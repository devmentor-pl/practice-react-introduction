import React from 'react';
import MenuItem from '../../03/components/MenuItem';

class Menu extends React.Component {
    render() {
        const { items } = this.props
        return (
                <ul
                    style={ulStyle}
                >
                    {items.map(item => (
                        <MenuItem
                            key={item.id}
                            text={item.text}
                            url={item.url}
                        />
                    ))}
                </ul>
        )
    }
}

const ulStyle = {
    display: 'flex',
    justifyContent: 'end',
    flexDirection: 'row',
    padding: '10px 20px',
    backgroundColor: 'rgb(30, 213, 241)',
    borderRadius: '8px',
    color: 'rgb(255, 255, 255)'
}

export default Menu;