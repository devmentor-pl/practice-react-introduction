import React from 'react';
import ReactDOM from 'react-dom';
import GetHeader from './HeaderFn';
import GetHeaderCl from './HeaderCl';

ReactDOM.render(
  <div>
    <GetHeader text='Moja pierwsza strona w React' />
    <GetHeaderCl text='Moja pierwsza strona w React Cl' />
  </div>,
  document.getElementById('root')
);
