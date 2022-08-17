import React from 'react';
import ReactDOM from 'react-dom';

class MenuItem extends React.Component {
    render() {
        return <ul> 
                    <li> 
                        <a> { this.props.text} {this.props.url}
                        </a>
                    </li>
                </ul>
    }
}

export default MenuItem;