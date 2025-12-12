import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
	React.createElement('h1', null, 'React działa!'),
	document.querySelector('#root')
);
