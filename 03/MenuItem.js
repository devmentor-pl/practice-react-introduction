import React from 'react';

function MenuItem(props) {
    const {text, url} = props;

    return<li><a href={url}>{text}</a><a/></li>
}

export default MenuItem;