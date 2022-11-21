import React from "react"

class MenuItem extends React.Component{
    render(){
        return <li><a src={this.props.url}>{this.props.text}</a></li>
    }
}

export default MenuItem
