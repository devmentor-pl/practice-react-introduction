import React from 'react';
import ReactDOM from 'react-dom';
import MenuItems from '../03/comps/MenuItems';

const Menu = () => {
    return (
        <ul>
            <MenuItems text="home" url="/" />
            <MenuItems text="kontakt" url="/contact" /> 
        </ul>
    );
}

const Nav = () => {
    return (
        <nav>
            <Menu />
        </nav>
    )
}

ReactDOM.render(<Nav />, document.getElementById('root'));