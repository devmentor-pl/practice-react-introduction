import React from 'react';
//import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


/*class MenuItem extends React.Component {
    render() {
        return <ul> 
                    <li> 
                        <a> { this.props.text} {this.props.url}
                        </a>
                    </li>
                </ul>
    }
}*/

const MenuItem = props => {
    const {text, url} = props;
    return (
        <ul>
            <li> 
                <a href={url}> {text} 
                </a>
            </li>
        </ul>
    );
}

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default MenuItem;