import React from 'react';

class Menu2 extends React.Component{
    render(){
        return (
            <ul>{this.renderItems()}</ul>
        )
    }

    renderItems(){
        return(
            <li>
                {this.props.items.map((item) => {
                <a href ={item.url}>{item.text}</a>})
                }
            </li>
        )
    }

}

export default Menu2;
