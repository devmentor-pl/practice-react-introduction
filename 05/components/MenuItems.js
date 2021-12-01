import React from "react";
import PropTypes from 'prop-types';

class MenuItems extends React.Component{
    render() {
        return (
            <li>
                <a href={this.props.url}>{this.props.text}</a>
            </li>
        )
    }
}

MenuItems.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default MenuItems;