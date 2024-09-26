import PropTypes from 'prop-types';
import React from 'react';
import MenuItem from '../../03/components/MenuItem';

const Menu = (props) => {
    const elements = props.elements;
    const liElements = elements.map(element => {
        const {text, url} = element;
        return <MenuItem text={text} url={url} />
    })

    return (
        <ul>
            {liElements}
        </ul>
    )
}

Menu.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default Menu;