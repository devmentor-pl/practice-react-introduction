import React from "react";
import ReactDOM from "react-dom";
import MenuItem from './menu'


class Menu extends React.Component {
    render() {
        return (
            <ul>
                <MenuItem text='kontakt' url='/contact'/>
                <MenuItem text='o nas' url='/aboutus'/>
                <MenuItem text='pomoc' url='/help'/>
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