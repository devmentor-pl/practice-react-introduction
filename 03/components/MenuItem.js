import React from 'react';

export default class MenuItem extends React.Component {

    render() {
        return (
            <li>
                <a href= { this.props.url }>
                    { this.props.text }
                </a>
            </li>
        )
    }
}