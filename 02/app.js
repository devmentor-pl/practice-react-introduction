import React from "react";
import  ReactDOM  from "react-dom";

const style = {
  borderBottom: '1px solid blue',
  color: 'red'
}

function HeaderFn(){
  return <header style={style}>Moja pierwsza strona w React (fn)</header>
}
class HeaderCl extends React.Component{
  render(){
    return <header style={style}>Moja pierwsza strona w React (cl)</header>
  }
}
ReactDOM.render(
  <section>
    <HeaderFn/>
    <br/>
    <HeaderCl/>
  </section>
  ,document.querySelector('#root')
)