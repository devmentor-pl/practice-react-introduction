import React from "react"

export const MenuItem = props => {
    return <li><a href={`${props.url}`}>{props.text}</a></li>
}

export default MenuItem

