import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ items }) => {
    return (
        <ul>
            {items}
        </ul>
    );
}

Menu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Menu;