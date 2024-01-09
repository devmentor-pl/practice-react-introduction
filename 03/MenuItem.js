import React from "react"

class MenuItem extends React.Component{
    render(){
        const {url, text} = this.props
        return <li><a src={url}>{text}</a></li>
    }
}

export default MenuItem
