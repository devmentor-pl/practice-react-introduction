import React from 'react';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';
class MenuItem extends React.Component {
    render() {
        const { text, url } = this.props;
        return (
            <li
                className="menu-item"
                style={liStyles}
                >
                <a 
                    className="menu-link"
                    style={linkStyles}
                    href={url}>{text}</a>
            </li>
        )
    }
}

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    url:  urlPropType.isRequired,

}

const liStyles = {
    listStyle: 'none',
    marginRight: '10px',
    padding: '10px 20px',
    border: '1px solid rgb(255, 255, 255)'
}
const linkStyles = {
    listStyle: 'none',
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'rgb(255, 255, 255)',
}


export default MenuItem;