import React from "react";
import MenuItem from "../03/MenuItem.js";
import PropTypes from 'prop-types'
const Menu = props => {
  const { items } = props;
   const listItems = items.map(item => <li><a href={item.url}>{item.text}</a></li>)
   const jsx = <ul> { listItems } </ul>;
    return (
      <>{jsx}</>
      // <ul>
      //     <MenuItem text="home" url="/"/>
      //     <MenuItem text="kontakt" url="/contact"/>
      // </ul>
    );
    
  };
  Menu.propTypes = {
   items: PropTypes.array.isRequired
  }
  export default Menu;