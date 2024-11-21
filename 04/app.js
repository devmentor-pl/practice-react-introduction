import React from 'react';
import ReactDOM from 'react-dom';
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
                <MenuItem text="home" url="/" />
                <MenuItem text="contact" url="/contact" />
            </ul>
        )
    }
}

ReactDOM.render(
    <Nav />,
    document.querySelector('#root')
);