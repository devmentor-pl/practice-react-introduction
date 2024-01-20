import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('root'))

const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 80px)',
    color: 'cadetblue',
    fontSize: '2rem',
    fontFamily: 'Arial',
    textTransform: "uppercase",
    boxShadow: '10px 5px 30px cadetblue',
    margin: "40px",
    boxSizing: 'border-box'
}

// const Header = () => {
//     return (
//         <header style={headerStyle}>
//             Moja pierwsza strona w React.
//         </header>
//     )
// }

class Header extends React.Component {
    render(){
        return (
            <header style={headerStyle}>
                Moja pierwsza strona w React
            </header>
        )
    }
}


root.render(<Header/>)