import React from 'react';

class Menu2 extends React.Component{
    render(){
        return (
            <ul>
            {this.props.items.map((item) => {
                return (
                    <li>
                        <a href ={item.url}>{item.text}</a>
                    </li>
                    )
                })
            }
            </ul>
        )
    }
}

export default Menu2;
