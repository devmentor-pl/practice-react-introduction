import React from 'react';

import Menu from './Menu';


class Nav extends React.Component {
    render() {
        return (
            <nav>
                <Menu items={[
                    {text: 'strona główna', url: '/'}, 
                    {text: 'www', url: '/www'},
                    {text: 'React jest spoko', url: 'https://reactjs.org/'}
                ]}/>
            </nav>
        )
    }
}

export default Nav;