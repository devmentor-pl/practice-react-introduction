import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
    render() {
        return (
            <nav>
                <ul
                    className="menuUlEl"
                    style={ulStyle}
>
                    <MenuItem url="/home" text="Home" />
                    <MenuItem url="/about" text="About" />
                    <MenuItem url="/projects" text="Projects" />
                    <MenuItem url="/contact" text="Contact" />
                </ul>
            </nav>
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