import React from "react";
import {createRoot} from 'react-dom/client';

const root = createRoot(document.querySelector('#root'))
const text = "Moja pierwsza strona w React"
 const headerStyle = { 
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    textAlign: 'center' 
         
    }
const HeaderFn = ()=>{
    return(
        <header style={headerStyle} >
        {text}
    </header>
    )       
}
class HeaderCl extends React.Component {
    render(){return <header style={headerStyle} >
    {text}
</header>}
    
}


root.render(<HeaderCl/>)
root.render(<HeaderFn />)