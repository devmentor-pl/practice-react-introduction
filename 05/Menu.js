import React from 'react'
import MenuItem from './MenuItem'

const Menu = (props) => (
    <ul>
        {
            props.items.map((item, index) => (
                <MenuItem
                    key={index}
                    text={item.text}
                    url={item.url}
                />
            ))
        }
    </ul>
)

export default Menu
