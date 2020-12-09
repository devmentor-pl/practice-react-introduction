import React from 'react'
import PropTypes from 'prop-types'

class MenuItems extends React.Component {
    render() {
        const {url, text, _key} = this.props

        return <li key={_key}>
            <a href={url}>{text}</a>
        </li>
    }
}

MenuItems.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    _key: PropTypes.string.isRequired
}
export default MenuItems