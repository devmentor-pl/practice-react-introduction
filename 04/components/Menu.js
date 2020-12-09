import React from 'react'
import MenuItems from './MenuItems'

class Menu extends React.Component {
    render() {
        return <ul>
            <MenuItems url="/" text="home"></MenuItems>
            <MenuItems url="/contact" text="kontakt"></MenuItems>
        </ul>
    }
}
export default Menu