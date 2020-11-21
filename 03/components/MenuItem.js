import React from 'react';

const MenuItem = props => {
    return (
        <li key={props.text}>
            {props.text}
            <a url={props.url}></a>
        </li>
    )
}

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default MenuItem;