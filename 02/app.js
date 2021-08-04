import React from 'react';
import ReactDOM from 'react-dom';

const styleHeaderFunction = {
    fontSize: '10vw',
    color: 'white',
    fontFamily: 'Arial',
    textAlign: 'center',
    letterSpacing: '1vw',
    border: '1vw solid blue',
    borderRadius: '5vw',
    backgroundColor: 'green'
}

const styleHeaderClass = {
    fontSize: '10vw',
    color: 'white',
    fontFamily: 'Arial',
    textAlign: 'center',
    letterSpacing: '1vw',
    border: '1vw solid green',
    borderRadius: '5vw',
    backgroundColor: 'blue'
}

const HeaderFunction = () => {
    return (
        <div>
            <header>
                <h1 style = {styleHeaderFunction}>Moja pierwsza strona w React</h1>
                <h2>funkcja</h2>
            </header>
        </div>
    )
}

class HeaderClass extends React.Component {
    render() {
        return <header>
            <h1 style = {styleHeaderClass}>Moja pierwsza strona w React</h1>
            <h2>klasa</h2>
        </header>
    }
}

ReactDOM.render(
    <section>
        <HeaderFunction/>
        <HeaderClass/>
    </section>,
    document.querySelector('#root')
)
