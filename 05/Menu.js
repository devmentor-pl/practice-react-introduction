import React from 'react';
import MenuItem from '../03/MenuItem';
import PropTypes from 'prop-types'

class Menu extends React.Component {
    render() {
        const list = this.props.items.map(item => {
            return <MenuItem text={item.text} url={item.url}/>
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