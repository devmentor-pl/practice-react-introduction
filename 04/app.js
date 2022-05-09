import React from 'react';
import ReactDom from "react-dom";
import MenuItem from './../03/MenuItem';

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <Menu />
            </nav>
        )
    }
}

class Menu extends React.Component {
    render() {
        return (
            <ul>
                <MenuItem text='home' url='/' />
                <MenuItem text='kontakt' url='/contact' />
            </ul>
        )
    }
}

ReactDom.render(
    <Nav />,
    document.querySelector('#root')
);