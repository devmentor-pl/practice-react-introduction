import React from "react";
const MenuItem = props => {
    const {text, url} = props
    return (
        <ul>
            <li><a href={url}>{text}</a></li>
            <li><a href={url}>{text}</a></li>
            <li><a href={url}>{text}</a></li>
        </ul>
    )
}

export default MenuItem;