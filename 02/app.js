import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector('#root');
const style = {
  background: 'yellow',
  color: 'black',
  border: '2px solid black', 
  margin: '10px',
  padding: '10px'
}

function HeaderFn() {
  return <header style={style}>Moja pierwsza strona w React za pomocą funkcji</header>
}

class HeaderCl extends React.Component {
  render() {
    return <header style={style}>moja pierwsza strona w React za pomocą klasy</header>
  }
}

const headerCl = new HeaderCl()

ReactDOM.render(
  <section>
    <HeaderFn></HeaderFn>
    <HeaderCl />
  </section>, 
  root
)
