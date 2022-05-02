import React from 'react';
import ReactDom from 'react-dom';
import HeaderFn from './components/HeaderFn';
import HeaderCl from './components/HeaderCl';

ReactDom.render(
    <>
    <HeaderFn/>
    <HeaderCl/>
    </>,
    document.querySelector('#root')
)