//Rozwiązanie

import React from 'react';

import ReactDOM  from 'react-dom';

import MenuItem from './../03/MenuItem.js';

class Menu extends React.Component {
    render() {
        return (
            <ul>
                <MenuItem text="home" url="home"></MenuItem>
                <MenuItem text="kontakt" url="contact"></MenuItem>
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
);