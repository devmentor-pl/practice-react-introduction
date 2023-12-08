import React from 'react';
import Menu from './Menu';

class Nav extends React.Component {
    render() {        
        return (
            <nav>
                <Menu 
                    items={[
                        {text: 'strona główna', url: '/'},
                        {text: 'kontakt', url: '/contact'},
                        {text: 'o nas', url: '/us'},
                        {text: 'blog', url: 'http://www.longedaquiaquimesmo.com'}
                    ]}
                />
            </nav>
        )
    }
}

export default Nav;