import React from "react";
import ReactDOM from "react-dom";

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
