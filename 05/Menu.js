import React from 'react';

import MenuItem from '../03/MenuItem';
import PropTypes from 'prop-types';

class Menu extends React.Component {
    render() {
        const {items} = this.props;
        const list = items.map(item => {
            const {text, url} = item;
            return <MenuItem text={text} url={url}/>
        })

        return (
            <ul>
                {list}
            </ul>
        )
    }
}

Menu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
}

export default Menu;