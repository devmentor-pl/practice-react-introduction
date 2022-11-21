import React from "react";
import ReactDOM from "react-dom";
import MenuItem from "../03/MenuItem";

class Menu extends React.Component{
    render(){
        return <ul>
            <MenuItem text="home" url="/"></MenuItem>
            <MenuItem text="kontakt" url="/"></MenuItem>
            </ul>
    }
}

class Nav extends React.Component {
    render(){
        return <nav>
            <Menu></Menu>
        </nav>
    }
}


ReactDOM.render(
    <Nav></Nav>,
    document.querySelector('#root')
)