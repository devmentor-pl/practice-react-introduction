import React from "react"
import Menu from './Menu'

const Nav = () => {
    const itemsArr = [
        { text: 'strona główna', url: '/' },
        { text: 'www', url: '/www' }
    ]

    return (
        <nav>
            <Menu items={itemsArr} />
        </nav>
    )
}

export default Nav