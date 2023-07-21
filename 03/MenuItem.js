import React from "react"

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
    return (
        <li>
            <a href={props.url}>{props.text}</a>
        </li>
    )
}

export default MenuItem