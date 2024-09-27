import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './src/components/menuItem';

const App = () => <div><MenuItem text="kontakt" url="/contact"/></div>

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);