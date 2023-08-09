import React from "react"

export const MenuItem = (props) => {
  const {url , text} = props
  return (
      <li><a href={url}></a>{text}</li>
  )
}

export default MenuItem
