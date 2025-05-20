import React from "react";
import { createRoot } from "react-dom/client";
import MenuItem from '../03/MenuItem'
const root = createRoot(document.querySelector('#root'));

const Nav = () => {
    return (
        <nav>
       <Menu />
    </nav>
    )
}


const Menu = () => {
    return (
        <>
            <MenuItem text="home" url="/"/>
            <MenuItem text="kontakt" url="/contact"/>
        </>
    )
}

root.render(<Nav/>)