import React from "react";
import {createRoot} from "react-dom/client"

const root = createRoot(document.querySelector('#root'))

const myStyle = {
    border: '1px solid black',
    backgroundColor: 'red',
    borderRadius: '5px',
}

const HeaderFn = () => {
    return (
        <header style={myStyle}>Moja pierwsza strona w React</header>
    )
}

class HeaderCl extends React.Component {
    render() {
        return <header style={myStyle}>Moja pierwsza strona w React</header>
    }
}

root.render(
    <>
    <HeaderFn />
    <HeaderCl />
    </>
)