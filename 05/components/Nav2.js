import React from 'react';
import Menu2 from './Menu2';

const Nav2 = () => (
    <nav>
        <Menu2
            items={[
                {text: 'strona główna', url: '/'},
                {text: 'www', url: '/www'}
            ]}
        />
    </nav>
)

export default Nav2;
