import React from "react";

import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector('#root'));

const stylesFn = {
    color: 'yellow',
    backgroundColor: 'green',
    padding: '10px',
    textAlign: 'center',
    fontFamily: 'Arial'
};
const stylesCl = {
    color: 'white',
    backgroundColor: 'black',
    padding: '10px',
    textAlign: 'center',
    fontFamily: 'Arial'
}

const HeaderFn = (props) => { 
    return <header style={stylesFn}>{props.text}</header>
}
class HeaderCl extends React.Component {
    render () {
        return <header style={stylesCl}>{this.props.text}</header>
    }
}
const App = () => {
    return (
        <>
        <HeaderFn text="Moja pierwsza strona w react"/>
        <HeaderCl text="Moja pierwsza strona w react"/>
        </>
    )
}

root.render(<App />)