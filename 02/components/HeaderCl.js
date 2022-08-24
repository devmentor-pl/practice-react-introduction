import React from 'react';

export default class HeaderCl extends React.Component {
    styleHeader = {
        color: 'yellow',
        backgroundColor: 'blue',
        textAlign: 'center'
    }
    
    render() {
        return (
            <header 
                style = {this.styleHeader}
            > {this.props.text} </header>
        )
    }
}