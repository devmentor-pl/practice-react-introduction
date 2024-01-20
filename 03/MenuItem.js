import React from "react"
import PropTypes from 'prop-types'

export const MenuItem = (props) => {
  const {url , text} = props
  return (
      <li><a href={url}></a>{text}</li>
  )
}

MenuItem.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default MenuItem
