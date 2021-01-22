import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = props =>{
    return <li>
        <a url={props.url}> {props.text}</a>
        </li>;
};

MenuItem.propTypes= {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}


export default MenuItem