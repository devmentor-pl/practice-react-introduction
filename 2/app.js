

import React from 'react';
import ReactDOM from 'react-dom';


/////////////// KLASA //////////////////////////


// class Header  extends React.Component {
//     render() {
//         const title = 'Moja pierwsza strona w React :) '

//         const myStyles = {
//         border: '3px solid blue',
//         padding: '20px',
//         color: 'blue',
//         textAlign: 'center',
//         textTransform: 'uppercase'
    
//         }
    
//         return (
         
//         <header>
//         <h1 style = { myStyles }> {title} </h1>
//         </header>
           
//         )
  
//     }

// }

// ReactDOM.render(<Header />, document.querySelector('#root'))




/////////////// FUNCKJA //////////////////////////

    const myStyles = {
        border: '3px solid blue',
        padding: '20px',
        color: 'blue',
        textAlign: 'center',
        textTransform: 'uppercase'
            
    }

    const Header = props => {
        return <header style = { myStyles }> { props.text } </header>

    }


    const App = () => <Header text="Moja pierwsza strona w React!"/>;



    ReactDOM.render(<App/>, document.querySelector('#root'));