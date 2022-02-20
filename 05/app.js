import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Nav2 from './components/Nav2';

ReactDOM.render(
    <Nav/>, document.querySelector('#root')
);


// probowałam zrobic zadanie dodatkowe ale nie wiem jak rozbic to na 2 komponenty, wszystko w Nav siedzi
ReactDOM.render(
    <Nav2/>, document.querySelector('#root2')
)
