import React from 'react';
import Menu from './Menu';

class Nav extends React.Component {
    render() {        
        return (
            <nav>
                <Menu 
                    items={[
                        {text: 'Home', url: '/'},
                        {text: 'Contact', url: '/contact'},
                        {text: 'about', url: '/us'},
                        {text: 'blog', url: 'https://www.blogger.com/about/'}
                    ]}
                />
            </nav>
        )
    }
}

export default Nav
