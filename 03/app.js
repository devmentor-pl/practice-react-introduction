import React from 'react';
import ReactDom  from 'react-dom';
import MenuItem from './MenuItem';


const App = () => <MenuItem text="kontakt" url="/contact"/>

ReactDom.render(
    <App />,
    document.querySelector('#root')
);