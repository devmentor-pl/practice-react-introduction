import React from 'react';

class Menu2 extends React.Component{
    render(){
        const {text, url} = this.props;
        return(
            <ul>
                <li>
                    <a href={url}>{text}</a>
                </li>
            </ul>
        )
    }
}

export default Menu2;