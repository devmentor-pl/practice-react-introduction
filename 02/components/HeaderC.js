import React, { Component } from 'react'

export default class HeaderCl extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header style={ this.props.style } >
                Moja pierwsza strona w React. - Class Component
            </header>
        )
    }
}
