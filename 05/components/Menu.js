import React from 'react'
import MenuItem from "./MenuItem"

const Menu = (props) => {
    const { items } = props

    const liItems = items.map(item => <MenuItem text={item.text} url={item.url} key={Math.random()} />)
    return (
        <ul>
            {liItems}
        </ul>
    )
}

export default Menu