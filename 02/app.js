import React from "react";
import ReactDOM from "react-dom";

const style = {
    fontFamily: 'sans-serif',
    padding: '10px',
    textShadow: '1px -1px 10px black'
}

const HeaderFn = () => <header style={style}>Moja pierwsza strona w React - funkcja!</header>

class HeaderCl extends React.Component {
    render(){
        return <header style={style}>Moja pierwsza strona w React - klasa!</header>
    }
}

ReactDOM.render(
    <section>
        <HeaderFn/>
        <HeaderCl/>
    </section>,
    document.querySelector('#root')
)
