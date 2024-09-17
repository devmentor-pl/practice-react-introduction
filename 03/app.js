import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './MenuItem';

const LiItem = () => <MenuItem text="Kontakt" url="/contact"/>
  

ReactDOM.render(
    <LiItem/>,
    document.querySelector('#root')
);

