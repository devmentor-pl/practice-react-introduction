import React from 'react';
import PropTypes from 'prop-types'

const MenuItem = (props) => {
    const { text, url } = props
    console.log(text, url)
    return (
        <ul>
            <li>
                <a
                    style={{ textDecoration: 'none', 
                    color: 'red' }}
                    href={url}
                >
                    {text}
                </a>
            </li>
        </ul>
    )
}
MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
export default MenuItem