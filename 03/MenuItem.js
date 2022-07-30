import React from 'react';

// function MenuItem(props) {
//     const {text, url} = props;

//     return <li><a href={url}>{text}</a></li>
// }

class MenuItem extends React.Component {
    render() {
        const {text, url} = this.props;

        return <li><a href={url}>{text}</a></li>
    }
}

export default MenuItem;