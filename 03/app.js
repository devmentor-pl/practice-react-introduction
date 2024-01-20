import React from 'react'
import ReactDOM from 'react-dom'
import MenuItem from './MenuItem';

const root = document.querySelector('#root');

ReactDOM.render(
  <section>
    <MenuItem text="kontakt" url="/contact"/>
  </section>,
  root
)