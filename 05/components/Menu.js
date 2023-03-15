import React from "react";
import PropTypes from "prop-types";

class Menu extends React.Component {
    render() {
        const menuItems = this.props.item.map(prop =>
            <li><a href={prop.url}>{prop.text}</a></li>
        );

        return (
            <ul>
                {menuItems}
            </ul>
        )
    }
}

Menu.propTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    })).isRequired,
}

export default Menu;