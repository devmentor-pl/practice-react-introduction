import React from 'react';

import Menu from './Menu'

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <Menu items={[
                    {text: 'strona główna', url: '/'}, 
                    {text: 'www', url: '/www'},
                    {text: 'galeria', url: '/www'},
                    {text: 'kontakt', url: '/www'}
                ]}/>
            </nav>
        )

    }
}

export default Nav;