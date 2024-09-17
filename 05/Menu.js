import MenuItem from '../03/MenuItem'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

const Menu = () => {
    const arr = [<MenuItem text="strona główna" url="/" />, <MenuItem text="www" url="/www" />];
    const jsx = <ul>{arr}</ul>
    return jsx
}

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default Menu