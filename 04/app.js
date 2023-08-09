import React from 'react'
import ReactDOM from 'react-dom'
import MenuItem from '../03/MenuItem'

const root = document.querySelector('#root')

function Nav() {
  return (
    <nav>
      <Menu />
    </nav>
  )
}

function Menu() {
  return (
    <ul>
      <MenuItem text="home" url="/"/>
      <MenuItem text="kontakt" url="/contact"/>
    </ul>
  )
}

ReactDOM.render(
  <Nav />,
  root
)