import React from "react"
import PropTypes from 'prop-types';

// export default class MenuItem extends React.Component {
//     render() {
//         return (
//             <li>
//                 <a href={this.props.url}>{this.props.text}</a>
//             </li>
//         )
//     }
// }

const MenuItem = props => {
    const {url, text} = props
    return (
        <li>
            <a href={url}>{text}</a>
        </li>
    )
}

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default MenuItem