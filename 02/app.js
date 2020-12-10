import React from 'react'
import ReactDOM from 'react-dom'

const root = document.querySelector('#root')

const styleFn = {
  padding: '20vh 10%',
  background: 'black',
  color: 'white',
  fontFamily: 'sans-serif',
  height: '100vh',
  border: '50px solid #999',
  fontSize: '40px'
}
const styleCl = {
  padding: '20vh 10%',
  background: 'black',
  color: '#345678',
  fontFamily: 'sans-serif',
  height: '100vh',
  border: '60px dotted #333999',
  fontSize: '5rem',
  textTransform: 'uppercase',
  fontWeight: 'bold'
}


const HeaderFn = (props) => {
  return (<header style={styleFn}>{props.text}</header>)
}

class HeaderCl extends React.Component {
  render() { //cytat "właściwość renderująca jest funkcją, której komponent używa, aby wiedzieć, co ma wyrenderować." - do omówienia na spotkaniu :)
    return <header style={styleCl}>{this.props.text}</header>
  }
}

// ReactDOM.render(<HeaderFn text='Moja pierwsza strona w React' />, root)
ReactDOM.render(<HeaderCl text='Moja pierwsza strona w React' />, root)