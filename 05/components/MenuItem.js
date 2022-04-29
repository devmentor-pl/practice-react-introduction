import propTypes from 'prop-types';
import React from 'react';

const MenuItem = (props) => {
    const {url, text} = props;

    return (
        <li>
            <a href={url}>{text}</a>
        </li>
    )
}

MenuItem.propTypes = {
    url: propTypes.string.isRequired,
    text: propTypes.string.isRequired
}

export default MenuItem;