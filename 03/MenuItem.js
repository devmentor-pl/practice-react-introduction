import React from "react";
class MenuItem extends React.Component {
  render() {
    return (
      <li className={this.props.listItemClass}>
        <a href={this.props.listItemlink}>{this.props.listItemLinkText}</a>
      </li>
    );
  }
}
export default MenuItem;
