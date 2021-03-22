import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './MenuItem';

const UlList = () => {
    return <MenuItem text="kontakt" url="/contact" />
}

ReactDOM.render(
    <ul>
        <UlList />
    </ul>,
    document.querySelector('#root')
);