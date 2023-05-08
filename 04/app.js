import React from 'react';
import ReactDOM from 'react-dom';

import MenuItem from './../03/MenuItem';

class Menu extends React.Component {
    render() {
        return (
            <ul>
                <MenuItem text="home" url="/"></MenuItem>
                <MenuItem text="kontakt" url="/contact"></MenuItem>
                <MenuItem text="kolejny element menu..." url="/"></MenuItem>
            </ul>
        )

    }
}

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <Menu/>
            </nav>
        )

    }
}

ReactDOM.render(
    <Nav/>,
    document.querySelector('#root')
)