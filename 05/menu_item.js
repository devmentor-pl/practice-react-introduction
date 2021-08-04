import React from 'react';
import PropTypes from 'prop-types';

const styleA = {
    fontSize: '3vw',
    textDecoration: 'none'
}

class MenuItem extends React.Component {
    render() {
        const {text, url} = this.props;
        console.log(this.props);
        return (
            <li>
                <a style = {styleA} href = {url}>{text}</a>
            </li>
        )
    }
}

MenuItem.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default MenuItem