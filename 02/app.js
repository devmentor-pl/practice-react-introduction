import React from "react";
import ReactDOM from "react-dom";

const restStyle = {
    backgroundColor: 'black',
    fontSize: '22px',
    width: '100%',
    padding:'100px, 0px',
    textAlign: 'center'
};

const HeaderFn = () => {
    return (
        <>
            <header style={{ color: 'white', ...restStyle }}>Moje Pierwsza strona w React!</header>
        </>
    );
};

class HeaderCl extends React.Component{
    render() {
        return (
            <>
                <header style={{ color: 'white', ...restStyle }}>Moje Pierwsza strona w React!</header>
            </>
        );
    };
};

const App = () => {
    return (
        <>
            <HeaderFn />
            <HeaderCl />
        </>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));