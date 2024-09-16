import React from "react";
import { createRoot } from "react-dom/client"
import MenuItem from './components/MenuItem'

const root = createRoot(document.querySelector('#root'))

const Menu = () => {
    return (
        <ul>
            <MenuItem text="home" url="/" />
            <MenuItem text="kontakt" url="/contact" />
        </ul>
    )
}

const Nav = () => {
    return (
        <nav>
            <Menu />
        </nav>
    )
}


root.render(
    <Nav></Nav>
)