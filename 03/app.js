import React from 'react'
import ReactDOM from 'react-dom'
import MenuItem from './MenuItem'

const UlEl = () => {
  return (
    <ul>
      <MenuItem text='kontakt' url='/contact' />
    </ul>
  )
}

ReactDOM.render(<UlEl />, document.querySelector('#root'))
