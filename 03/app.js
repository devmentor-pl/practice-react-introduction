import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './components/MenuItem';

ReactDOM.render(
  <MenuItem text='kontakt' url='/contact/' />,
  document.querySelector('#root')
);
