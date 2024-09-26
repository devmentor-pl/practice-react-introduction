import React from "react";

const stylesText = {
    textTransform: 'uppercase',
    color: 'gold'
}

const stylesHeader = {
    display: 'flex',
    backgroundColor: 'silver',
    height: '15vh',
    justifyContent: 'center',
    alignItems: 'center',
    border: '5px solid gold'
}

class HeaderCl extends React.Component{
    render() {
        return <header style = {stylesHeader}>
        <h1 style = {stylesText}>Moja pierwsza strona w React</h1>
        </header>
    }
}

export default HeaderCl;