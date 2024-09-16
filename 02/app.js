import React from 'react';
import ReactDOM from 'react-dom';

const myStyles = {
    margin: '10px',
    padding: '5px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    border: '1px solid blue',
    borderRadius: '5px',
    backgroundColor: 'lightblue',
}

const HeaderFn = () => {
    return <header style={myStyles}>Moja pierwsza strona w React - function</header>;
}

class HeaderCl extends React.Component {
    render() {
        return <header style={myStyles}>Moja pierwsza strona w React - class</header>;
    }
}

ReactDOM.render(
    <section>
        <HeaderFn />
        <HeaderCl />
    </section>,
    document.querySelector('#root')
);