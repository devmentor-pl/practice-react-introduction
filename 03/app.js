import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './menu_item';

const styleUl = {
    fontSize: '3vw'
}

ReactDOM.render (
    <ul style = {styleUl}><MenuItem text = "kontakt" url = "/contact"/></ul>,
    document.querySelector('#root')
) 