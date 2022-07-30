import React from 'react';
import PropTypes from 'prop-types';

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

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default MenuItem;