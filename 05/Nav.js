import React from 'react';
import Menu from './Menu';

const Nav = () => (
    <Menu items={
        [
            {text:'Strona główna', url: '/'},
            {text:'www', url: '/www'},
        ]
    } />
)

export default Nav