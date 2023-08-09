import React from 'react'
import MenuItem from '../03/MenuItem'


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

export default Menu