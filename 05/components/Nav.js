import React from 'react';
import Menu from './Menu';

class Nav extends React.Component {
    render() {        
        return (
            <nav>
                <Menu 
                    items={[
                        {text: 'home', url: '/'},
                        {text: 'kontakt', url: '/contact'},
                        {text: 'about us', url: '/us'},
                        {text: 'myCv', url: 'https://www.linkedin.com/in/davidtk/'}
                    ]}
                />
            </nav>
        )
    }
}

export default Nav;
