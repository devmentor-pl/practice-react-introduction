import React from 'react';
import PropTypes from 'prop-types';

const MenuItems = ({ text, url}) => {
    return (
        <li>
            <a href={url}>{text}</a>
        </li>
    );
};

export default MenuItems;

MenuItems.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}