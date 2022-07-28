import React from 'react';
import PropTypes from 'prop-types'

const MenuItem = ({text, url}) => {
    console.log(text, url)
    return (
            <li>
                <a
                    style={{ textDecoration: 'none', 
                    color: 'green' }}
                    href={url}
                >
                    {text}
                </a>
            </li>
    )
}
MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
export default MenuItem