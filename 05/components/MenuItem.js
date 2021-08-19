import React from 'react';
import PropTypes from 'prop-types';

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

MenuItem.propTypes = {
    url: PropTypes.string,
    text: PropTypes.string
}

export default MenuItem;