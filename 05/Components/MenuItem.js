import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = props => {
    return (
            <li>
                <a href= {props.url}>{ props.text}</a>
            </li>
    );
}

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default MenuItem;