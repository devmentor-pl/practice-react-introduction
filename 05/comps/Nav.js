import React from 'react';
import Menu from './Menu';

const Nav = () => {
    const menuItems = [
        <li key="1"><a href="/">strona główna</a></li>,
        <li key="2"><a href="/www">www</a></li>
    ];

    return (
        <nav>
            <Menu items={menuItems} />
        </nav>
    )
}

export default Nav;