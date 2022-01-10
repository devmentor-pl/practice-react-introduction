import React from 'react';

// class MenuItem extends React.Component {
//     render() {
//         const {url, text} = this.props;
//         return (
//             <li>
//                 <a href={ url }>{ text }</a>
//             </li>
//         )        
//     }
// }

const MenuItem = props => {
    const {url, text} = props
    return (
        <li>
            <a href={ url }>{ text }</a>
        </li>
    )
}

export default MenuItem;