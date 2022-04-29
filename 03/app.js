import React from 'react';
import ReactDom from 'react-dom';
import MenuItem from './components/MenuItem';

ReactDom.render(
    <MenuItem text='Andrzej Duda' url='https://www.prezydent.pl/kontakt'/>,
    document.querySelector('#root')
);