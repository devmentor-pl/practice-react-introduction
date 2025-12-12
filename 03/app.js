import React from 'react';
import ReactDom from 'react-dom';
import MenuItem from './components/MenuItem';

const elements = (
	<>
		<MenuItem text="kontakt" url="/contact/" />
	</>
);

ReactDom.render(elements, document.querySelector('#root'));
