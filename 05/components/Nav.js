import React from 'react';
import Menu from './Menu';


class Nav extends React.Component {
    render() {
        const menuItems = [
            {id: 1, text: 'Home', url: '/home'},
            {id: 2, text: 'About', url: '/about'},
            {id: 3, text: 'Projects', url: '/projects'},
            {id: 4, text: 'Contact', url: '/contact'}
        ]

        return (
                <nav>
                    <Menu items={menuItems} />
                </nav>
        )
    }
}

export default Nav;