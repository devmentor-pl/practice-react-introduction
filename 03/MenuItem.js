import React from "react";
import PropTypes from "prop-types"

const MenuItem = props => {
    const  {text = 'home', url = '/home'} = props;
    return (
        <>
        <li className='listElement'><a className='aElement' url={url}>{text}</a></li>
        </>
    )
}

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default MenuItem;