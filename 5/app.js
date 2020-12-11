import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav'


const App = () => {
    return  (
        <>
        <Nav/>
        </>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));