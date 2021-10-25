import React from "react";
import MenuItem from "./MenuItem";

class Menu extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <MenuItem text={item.text} url={item.url} />
        ))}
      </ul>
    );
  }
}

export default Menu;
