import React, { Component } from 'react';
import Menu from './Menu';

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <Menu elements={[
                    {
                        text: 'homepage',
                        url: '/'
                    },
                    {
                        text: 'www',
                        url: '/www/'
                    }
                    ]}/>
            </nav>
        )
    }
}