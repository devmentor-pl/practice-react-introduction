import React from 'react';
import ReactDOM from 'react-dom';
import HeaderFn from './components/HeaderFn';
import HeaderCl from './components/HeaderCl';

ReactDOM.render(
    <>
        {/* <HeaderFn text='Moja pierwsza strona w React'/> */}
        <HeaderCl text='Moja pierwsza strona w React'/>
    </>,
    document.querySelector('#root')
)