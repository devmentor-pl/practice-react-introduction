import ReactDOM from 'react-dom/client'
import React from "react";
import { createRoot } from 'react-dom/client';
import MenuItem from '../03/MenuItem';


const root = ReactDOM.createRoot(document.querySelector('#root'))

class Menu extends React.Component {
    render() {
        return(
            <>
            <ul className='ulElements'>
                <MenuItem text="home" url="/"/>
                <MenuItem text="contact" url="/contact"/>
            </ul>
            </>
        )
    }
}

class Nav extends React.Component {
    render() {
        return(
            <>
                <nav className='navItem'><Menu /></nav>
            </>
        )
    }
}



root.render(<Nav />)