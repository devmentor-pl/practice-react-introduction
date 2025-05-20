import React from 'react'
import propTypes from 'prop-types';

const MenuItem = (props) => {
        const { text, url } = props;
        return (
            <ul>
                <li>
                    <a href={url}>{text}</a>
                </li>
            </ul>
        )
}

MenuItem.propTypes = {
    text: propTypes.string.isRequired,
    url: propTypes.string.isRequired
}


export default MenuItem;