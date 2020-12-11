
import PropTypes from 'prop-types';
import React from 'react';
import MenuItem from '../../3/MenuItem'


const Menu = (props) => {
    // const { text, url } = props;
    const items = props.items;

    const liItems = items.map(item => {
      const { text, url } = item
      return <MenuItem  text={text} url={url} />
    })

    return (
      <ul>
        {liItems}
      </ul>
    )
  }




Menu.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}


export default Menu;