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
    const {url, text} = props
    return (
        <li>
            <a href={url}>{text}</a>
        </li>
    )
}



export default MenuItem