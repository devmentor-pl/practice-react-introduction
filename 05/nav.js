import React from 'react';
import Menu from './menu';

const styleNav = {
    backgroundColor: 'yellowgreen',
    padding: '2vw'
}

class Nav extends React.Component {
    render() {
        return (
            <nav style = {styleNav}>
                <Menu/>
            </nav>
        )
    }
}

export default Nav