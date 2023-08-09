import React from "react"

export const MenuItem = (props) => {
  const {url , text} = props
  return (
    <ul>
      <li><a href={url}></a>{text}</li>
    </ul>
  )
}

export default MenuItem
