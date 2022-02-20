import React from 'react';
import Menu2 from './Menu2';

const Nav2 = () => (
    <nav>
        <Menu2
            items={[
                {text: 'strona główna', url: '/'},
                {text: 'o nas', url: '/o-nas'},
                {text: 'oferta', url: '/oferta'},
                {text: 'blog', url: '/blog'},
                {text: 'kontakt', url: '/kontakt'}
            ]}
        />
</nav>
)

export default Nav2;

