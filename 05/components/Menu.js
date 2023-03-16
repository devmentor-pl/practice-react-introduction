import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

class Menu extends React.Component {
    render() {
        const menuItems = this.props.item.map(prop =>
            <MenuItem text={prop.text} url={prop.url} />
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