import React from "react";
import MenuItem from "./MenuItem"
import PropTypes from "prop-types"

export const Menu = props => {
    return props.items.map(elem => {
        return (
            <MenuItem text={elem.text} url={elem.url} />
        )
    })
}

Menu.propTypes = {
    items: PropTypes.array.isRequired
}

export default Menu