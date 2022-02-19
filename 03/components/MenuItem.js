import React from 'react';

class MenuItem extends React.Component{
    render(){
        return(
            <ul>
                <li>
                    <a href={this.props.url}>{this.props.text}</a>
                </li>
            </ul>
        )
    }
}

export default MenuItem;