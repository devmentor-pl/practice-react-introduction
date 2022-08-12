import React from "react"
import PropTypes from "prop-types"

class MenuElement extends React.Component {
    render() {
        const { text, url } = this.props

        return <li><a href={url}>{text}</a></li>
    }
}

MenuElement.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}


export default MenuElement