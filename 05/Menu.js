import React from "react"
import MenuItem from "../03/MenuItem"

const Menu = props => {
    const { items } = props
    const mappedItems = items.map(item => {
        const { text, url } = item
        return <MenuItem text={text} url={url} />
    })

    return (
        <ul>
            {mappedItems}
        </ul>
    )
}

export default Menu