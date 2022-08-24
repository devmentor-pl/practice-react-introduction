import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './components/MenuItem';

const params = {
    text : 'Kontakty',
    url : '/contact'
}

ReactDOM.render(    
    <MenuItem {...params}/>,
    document.querySelector('#root')    
)
