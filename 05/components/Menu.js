import React from "react";
import MenuItem from "../../03/MenuItem";

export const Menu = () => {
      const list = [{text:'Home',url:'/'},{text:'Kontakt',url:'/contact'}]

  return (
    <>
      <ul>
        {list.map((el) => { return <MenuItem text={el.text} url={el.url}></MenuItem>})}
      </ul>
    </>
  );
};

export default Menu;
