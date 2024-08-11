import React from 'react'
import MenuItem from './MenuItem'


class Menu extends React.Component {
    render () {

        const items2 = this.props.items.map(item => {
            return <MenuItem text={item.text} url={item.url} />
        })
        return (
            <ul>
                {items2}
            </ul>
        )
    }
}

export default Menu
