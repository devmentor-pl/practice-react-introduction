import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Nav2 from './components/Nav2';

ReactDOM.render(
    <Nav/>, document.querySelector('#root')
);


// probowałam zrobic zadanie dodatkowe ale nie wyszło ... Nav2 i Menu2
ReactDOM.render(
    <Nav2/>, document.querySelector('#root2')
)
