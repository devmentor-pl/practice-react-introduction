import React from "react";
import PropTypes from "prop-types";
class MenuItem extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.url}>{this.props.text}</a>
      </li>
    );
  }
}
MenuItem.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuItem;
