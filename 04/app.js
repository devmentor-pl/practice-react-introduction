import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from '../03/components/MenuItem';


const Menu = () => {
    return (
        <ul>
            <MenuItem text="home" url="/" />
            <MenuItem text="kontakt" url="/contact" />
        </ul>
    )
}

const Nav = () => {
    return <nav><Menu /></nav>
}


ReactDOM.render(
    <Nav />,

    document.querySelector('#root')
);