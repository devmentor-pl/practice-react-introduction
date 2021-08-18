import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export class MenuItem extends React.Component {
    render() {
        const { text, url } = this.props;
        return (
            <li>
                <a href={url}>{text}</a>
            </li>
        );
    }
}

MenuItem.propTypes = {
    text: PropTypes.string,
    url: PropTypes.string,
};
