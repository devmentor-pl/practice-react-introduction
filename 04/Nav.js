import React from 'react';
import Menu from './Menu';


class Nav extends React.Component {
    render() {
        const array = [
            {text: 'strona główna', url: '/'},
            {text: 'www', url: '/www'},
        ]
        return (
            <nav>
                <Menu items={array}/>
            </nav>
        )
    }
}

export default Nav;