import React from "react";
import MenuItem from "../03/MenuItem.js"
const Menu = (props) => {
  const {items, jsx} = props;
  console.log(items)
  const renderItems = items.map(item => <li>{item}</li>)
    return (
      <ul>
        {renderItems}
      </ul>
      // <ul>
      //     <MenuItem text="home" url="/"/>
      //     <MenuItem text="kontakt" url="/contact"/>
      // </ul>
    );
  };
  export default Menu;