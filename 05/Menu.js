import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './../03/MenuItem';

class Menu extends React.Component {
  render() {
    const list = this.props.items.map((item) => {
      return <MenuItem text={item.text} url={item.url} />;
    });
    return <ul>{list}</ul>;
  }
}

export default Menu;

Menu.propTypes = {
  item: PropTypes.arrayOf(PropTypes.object),
};
