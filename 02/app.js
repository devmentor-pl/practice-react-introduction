import React from 'react';
import ReactDom from 'react-dom';
import HeaderFn from './components/HeaderFn';
import HeaderCl from './components/HeaderCl';
const elements = (
	<>
		<HeaderFn />
		<HeaderCl />
	</>
);

ReactDom.render(elements, document.querySelector('#root'));
