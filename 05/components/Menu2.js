import React from 'react';

class Menu2 extends React.Component{
    render(){
        return (
            <ul>{this.renderItems()}</ul>
        )
    }

    renderItems(){
        return (
            <>
                {this.props.items.map((item) => {
                    return(
                        <li>
                            <a href ={item.url}>{item.text}</a>
                        </li>
                    )
                })
            }
            </>
        )
    }
}

export default Menu2;
