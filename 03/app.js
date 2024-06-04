import ReactDOM from 'react-dom/client'
import React from "react";
import { createRoot } from 'react-dom/client';
import MenuItem from './MenuItem';

const root = ReactDOM.createRoot(document.querySelector('#root'))

const App = () => {
    return (
        <div>
            <MenuItem text="Contact" url="/contact" />
        </div>
    )
}

root.render(<App />)