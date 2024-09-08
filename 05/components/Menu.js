import React from "react"

import PropTypes from 'prop-types'

import MenuItem from './MenuItem'

export const Menu = (props) => {

  const {
    items
  } = props

  return (
    <ul>
      {
        items && items.map((item) => {
          const { text, url } = item
          return (
            <MenuItem
                key={url} 
                text={text}
                url={url}
            />
          )
        })
      }
    </ul>
  )
}

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string
  }))
}

export default Menu
