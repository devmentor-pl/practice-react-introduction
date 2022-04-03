import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../03/MenuItem.js';

const Menu = (props) => {

    const items = props.items;

    const liItems = items.map(item => {
        const { text, url } = item
        return <MenuItem text={text} url={url} />
    })

    return (
        <ul>
            {liItems}
        </ul>
    )
}



Menu.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default Menu;