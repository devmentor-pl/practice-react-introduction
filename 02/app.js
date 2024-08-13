import React from "react";


import { createRoot } from 'react-dom/client';
const root = createRoot(document.querySelector('#root'));
const myStyles  = {

    color: 'black'
}
const Header = () => {
    return (
        <header style = {myStyles}> Moja pierwsza strona w React </header>)

}


//class Header extends React.Component { render() { return <header className="title">Moja pierwsza strona w React</header>; } }

root.render(<Header />)
