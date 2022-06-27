import React from 'react'
import MenuItem from './MenuItem'

const Menu = () => (
    <ul>
        {/* <MenuItem text="home" /> */}
        <MenuItem text="home" url="/" />
        <MenuItem text="kontakt" url="/contact" />
    </ul>
)

export default Menu
