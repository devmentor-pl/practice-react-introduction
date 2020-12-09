import React from 'react'
import MenuItems from './MenuItems'
import PropTypes from 'prop-types'

class Menu extends React.Component {
    render() {
        const items = this.props.items

        return <ul>
            {items.map(
                (item, index) => { return <MenuItems url={item.url} text={item.text} _key={index.toString()}></MenuItems> }
            )}
        </ul>
    }
}

Menu.propTypes = {
    items: PropTypes.array.isRequired,
}
export default Menu