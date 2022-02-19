import React from 'react';
import ReactDOM from 'react-dom';

const styleHeaderFn = {
    width:'1000px',
    height:'100px',
    lineHeight:'100px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    fontSize:'20px',
    color:'green'
}

const styleHeaderCl = {
    width:'1000px',
    height:'100px',
    lineHeight:'100px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    fontSize:'25px',
    border:'2px solid blue'
}

//----------------------Komponent jako funkcja

const HeaderFn = () => (
    <header style={styleHeaderFn}>Moja Pierwsza strona w React - komponent przy wykorzystaniu FUNKCJI</header>
);


//----------------------Komponent jako class

class HeaderCl extends React.Component {
    render(){
        return <header style={styleHeaderCl}>Moja Pierwsza strona w React - komponent przy wykorzystaniu CLASS</header>
    }
}


const HeaderApp = () => (
    <>
        <HeaderFn/>
        <HeaderCl/>
    </>
)

ReactDOM.render(
    <HeaderApp/>,
    document.querySelector("#root")
);


