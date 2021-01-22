import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './MenuItem'

// const MenuItem = props =>{
//     return <li>
//         <a url={props.url}> {props.text}</a>
//         </li>;
// };


const App = () => 
    <MenuItem text="kontakt" url="/contact"/>;


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);