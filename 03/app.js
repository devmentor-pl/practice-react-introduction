import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './MenuItem';


const item = {text: 'kontakt', url: '/contact/'};

const App = () => <MenuItem {...item} />

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);