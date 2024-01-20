import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';

class Nav extends React.Component {
    render () {
        const { items } = this.props;
        return (
            <nav>
                <Menu items={items} />
            </nav>
        );
    }
}

Nav.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Nav;