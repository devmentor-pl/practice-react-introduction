import React from 'react';
import PropTypes from 'prop-types';

class MenuItem extends React.Component {
    render() {
        const { url, text } = this.props;
        return (
            <li>
                <a href={url}>
                    {text}
                </a>
            </li>
        );
    };
};

MenuItem.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default MenuItem;