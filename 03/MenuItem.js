import React from "react";
import PropTypes from 'prop-types'

const MenuItem = ({ text, url }) => {
    const list = [{text:text,url:url},{text:text,url:url}]
    return (
        <>
            {list.map((el) => { (<li><a href={el.url}>{el.text}</a></li>)})}
        </>
    );
};

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default MenuItem;