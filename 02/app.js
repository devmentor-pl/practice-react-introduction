import React from 'react';
import ReactDOM from 'react-dom';
import GetHeader from './HeaderFn';
import GetHeaderCl from './HeaderCl';

ReactDOM.render(
  //   <GetHeader text='Moja pierwsza strona w React' />,
  <GetHeaderCl text='Moja pierwsza strona w React Cl' />,
  document.getElementById('root')
);
