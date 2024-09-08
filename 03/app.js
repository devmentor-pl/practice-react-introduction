import React from "react"

import ReactDom from 'react-dom'

import MenuItem from './MenuItem'

ReactDom.render(
  <MenuItem 
  text={'Akademia Samouka'}
  url={'https://akademiasamouka.pl/'}
  />,
  document.querySelector('#root')
)