import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector('#root'));

document.body.style.cssText = 'margin: 0; font-family: sans-serif';
const headerStyles = {
    alignItems: 'center',
    backgroundColor: 'rgba(100,100,200, .8)',
    display: 'flex',
    height: '30vh',
};
const headerTextStyles = {
    backdropFilter: 'blur(5px)',
    background: 'rgba(255, 255, 255, .2)',
    border: '1px solid rgba(255, 255, 255, .3)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, .1)',
    color: 'white',
    fontSize: '2.3em',
    letterSpacing: '.1em',
    margin: '1em',
    padding: '1em',
}
const headerText = 'Moja pierwsza strona w React';

const HeaderFn = () => {
    return (
        <header style={headerStyles}>
            <h1 style={headerTextStyles}>{headerText}</h1>
        </header>
    )
};

class HeaderCl extends React.Component {
    render() {
        return <header style={headerStyles}>
            <h1 style={headerTextStyles}>{headerText}</h1>
        </header >
    }
}

root.render(<HeaderCl />)