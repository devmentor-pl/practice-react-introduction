import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Nav2 from './components/Nav2';

ReactDOM.render(
    <Nav/>, document.querySelector('#root')
);

ReactDOM.render(
    <Nav2/>, document.querySelector('#root2')
)
