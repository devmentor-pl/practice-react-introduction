import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

class HeaderCl extends React.Component{
    render(){
        return <header style={this.props.style}>Moja pierwsza strona w React</header>
    }
}

function HeaderFn(props) {
    return <header style={props.style}>Moja pierwsza strona w React</header>
}
const myStyles = {
    textAlign: 'center',
    fontWeight: '300',
    padding: '0.6em',
    backgroundImage: 'linear-gradient(to left, #553c9a, #b393d3)',
    color: 'white',
    boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.3)',
}
ReactDOM.render(
    <Fragment>
        <HeaderFn 
            style={myStyles} 
        /> 
        <HeaderCl style={myStyles}/>
    </Fragment>,
    document.getElementById('root')); 
