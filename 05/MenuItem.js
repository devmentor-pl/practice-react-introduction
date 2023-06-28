import React from "react";
import PropTypes from "prop-types";
class MenuItem extends React.Component {
  render() {
    return (
      <li className={this.props.listItemClass}>
        <a href={this.props.listItemlink}>{this.props.listItemLinkText}</a>
      </li>
    );
  }
}
MenuItem.propTypes = {
  listItemClass: PropTypes.string,
  listItemlink: PropTypes.string.isRequired,
  listItemLinkText: PropTypes.string.isRequired,
};

export default MenuItem;
