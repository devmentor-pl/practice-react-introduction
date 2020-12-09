import React from 'react'

class MenuItems extends React.Component {
    render() {
        const {url, text} = this.props

        return <li>
            <a href={url}>{text}</a>
        </li>
    }
}
export default MenuItems