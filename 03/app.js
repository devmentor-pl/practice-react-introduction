import React from 'react';
import ReactDOM from 'react-dom';
import MenuItems from './comps/MenuItems';

const App = () => {
    return (
        <ul>
            <MenuItems text="Home" url="/home" />
            <MenuItems text="About" url="/about" />
            <MenuItems text="Services" url="/services" />
            <MenuItems text="Contact" url="/contact" />
        </ul>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));