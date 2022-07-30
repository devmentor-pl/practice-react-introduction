import React from 'react';
import ReactDOM from 'react-dom';

import MenuItem from './MenuItem.js'

ReactDOM.render(
    <MenuItem text="mój link" url="https://devmentor.pl"/>, 
    document.querySelector('#root')
);