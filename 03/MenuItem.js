import React from 'react';

class MenuItem extends React.Component {
    render() {
        const {text, url} = this.props;
        return (
            <li>
                <a text={text} url={url}></a>
            </li>
        )
    }
}

export default MenuItem;