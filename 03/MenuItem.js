import React from "react";
import PropTypes from 'prop-types'

class MenuItem extends React.Component {
    render() {
        return <li>{this.props.text}
            <a>{this.props.url}</a>
        </li>

    }
}
MenuItem.PropTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
export default MenuItem;