import propTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types'

// function MenuItem(props) {
//     console.log(props)
//     const {text, url} = props;

//     return <li><a href={url}>{text}</a></li>
// }

class MenuItem extends React.Component {
    render() {
        const {text, url} = this.props // tu musi być this!
        return <li><a href={url}>{text}</a></li>

    }
}

MenuItem.propTypes = {
    text: propTypes.string.isRequired,
    url: propTypes.string.isRequired
}

export default MenuItem;


