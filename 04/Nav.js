import React from "react";
import Menu from "./Menu";
const Nav = () => {
  const arr = [<li>item1</li>, <li>item2</li>];
  const jsx = <ul> {arr} </ul>
    return <nav>
      <Menu items={arr}/>
    </nav>;
  };

export default Nav;