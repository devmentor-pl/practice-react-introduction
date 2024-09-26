import React from "react";
import ReactDOM from "react-dom";
import HeaderCl from "./components/HeaderCl";

const stylesText = {
    textDecoration: 'underline',
    color: 'silver'
}

const stylesHeader = {
    display: 'flex',
    backgroundColor: 'black',
    height: '15vh',
    justifyContent: 'center',
    alignItems: 'center',
    border: '5px solid silver'
}

const Header = () =>  <>
                        <HeaderCl />
                    </>


const HeaderFn = () => {
    return (
        <header style={stylesHeader}>
            <h1 style={stylesText}>Moja pierwsza strona w React</h1>
        </header>
    )
}

ReactDOM.render(
    <HeaderFn/>,
    // <Header/>,
    document.querySelector('#root')
);


