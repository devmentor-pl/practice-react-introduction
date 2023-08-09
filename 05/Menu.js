import React from 'react'
import MenuItem from '../03/MenuItem'
import PropTypes from 'prop-types'


const Menu = (props) => {
  const list = props.items.map((item) => {
    const { text, url } = item
    return (
      <MenuItem text={text} url={url} />
    )
  })

  return (
    <ul>
      {list}
    </ul>
  )
}

Menu.propTypes = {
  item: PropTypes.object
}

export default Menu