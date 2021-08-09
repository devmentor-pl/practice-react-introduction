import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from '../03/menu_item';

const styleUl = {
    fontSize: '3vw',
    backgroundColor: 'green'
}

const styleNav = {
    backgroundColor: 'yellowgreen',
    padding: '2vw'
}

class Menu extends React.Component {
    render() {
        return (
            <ul style = {styleUl}>
                <MenuItem text = "home" url = "/" />
                <MenuItem text = "kontakt" url = "/contact" />
            </ul>
        )
    }
}

class Nav extends React.Component {
    render() {
        return <nav style = {styleNav}> <Menu/> </nav>
    }
}

ReactDOM.render(
    <Nav/>,
    document.querySelector('#root')
) 