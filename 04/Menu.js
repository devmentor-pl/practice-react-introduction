import React from 'react'
import MenuItem from '../03/MenuItem'

const Menu = (props) => {
  const itemsData = props.items;
  const liItems = itemsData.map(item => {
    const { text, url } = item
    return <MenuItem key={text} text={text} url={url} />
  })
  return (
    <ul>
      {liItems}
    </ul>
  )
}

export default Menu
