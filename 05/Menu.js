import React from 'react';

const Menu = (props) => {
  const {items} = props;
  const menuList = items.map((item, index) => (
    <li key={index}>
      <a href={item.url}>{item.text}</a>
    </li>
  ));
  const jsx = <ul>{menuList}</ul>;
  return jsx;
};

export default Menu;
