import React from 'react';
import { createRoot } from 'react-dom/client';
import MenuItem from './MenuItem';

const root = createRoot(document.querySelector('#root'));

const App = () => {
    return (
        <ul>
            <MenuItem text="kontakt" url="/contact"/>
            <MenuItem text="o nas" url="/about"/>
            <MenuItem text="usługi" url="/services" />

        </ul>
    )
}

root.render(<App />);