import React from "react";
import ReactDOM from "react-dom";

const HeaderFn = () => {
    return (
        <>
            <header style={ style }>
                <h1 style={ myStyle }>Moja pierwsza strona w React</h1>
            </header>
        </>
    )
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

const myStyle = {
    padding: '0.5rem',
    border: '3px solid green',
    backgroundColor: 'lightblue',
    width: '50%',
    textAlign: 'center',
}

class H1 extends React.Component {
    render() {
        return <h1 style={ myStyle }>Moja pierwsza strona w React!</h1>
    }
}

const HeaderCl = () => {
    return <><header style={ style }><H1/></header></>
}

ReactDOM.render(
    <HeaderFn/>,
    // <HeaderCl/>,
    document.querySelector('#root')
)

// dlaczego nie oba Headery nie działają razem?