import React from 'react';
import ReactDom from 'react-dom';
import MenuItem from '../03/components/MenuItem';

const Nav = () => {
    return (
        <nav>
            <Menu/>
        </nav>
    )
}

const Menu = () => {
    return (
        <ul>
            <MenuItem text='Home' url='https://www.prezydent.pl/'/>
            <MenuItem text='Andrzej Duda' url='https://www.prezydent.pl/kontakt'/>
        </ul>
    )
}

ReactDom.render(
    <Nav/>,
    document.querySelector('#root')
);
