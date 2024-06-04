import ReactDOM from 'react-dom/client'
import React from "react";
import PropTypes from 'prop-types'
import { createRoot } from 'react-dom/client';
import Menu from './components/Menu';
import Nav from './components/Nav';
import MenuItem from '../03/MenuItem';


const root = ReactDOM.createRoot(document.querySelector('#root'))

const App = () => {
    return (
        <MenuItem />
    )
}

root.render(<App />)