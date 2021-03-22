import React from 'react';

class MenuItem extends React.Component {
    render() {
        return <li>{this.props.text} <a>{this.props.url}</a></li>
    }
}

export default MenuItem;