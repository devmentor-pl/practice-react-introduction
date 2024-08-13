import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {
  render() {

    const list = this.props.items.map(item => { return <li><a href={item.url}>{item.text}</a></li> })

    return (<ul>
      {list}

    </ul>
    )


  }
}


Menu.propTypes =
  { text: PropTypes.string, url: PropTypes.string, }

export default Menu



