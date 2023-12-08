import React from 'react';
import ReactDOM from 'react-dom';

const myStyles = {
    fontFamily: 'Arial, sans-serif',
    margin: '110px',
    padding: '5px',
    textAlign: 'center',
    border: '2px solid black',
    borderRadius: '8px',
    backgroundColor: 'skyblue',
}

const HeaderFn = () => {
    return <header style={myStyles}>Pierwsza strona w React - function</header>;
}

class HeaderCl extends React.Component {
    render() {
        return <header style={myStyles}>Pierwsza strona w React - class</header>;
    }
}

ReactDOM.render(
    <section>
        <HeaderFn/>
        <HeaderCl/>
    </section>,
    document.querySelector('#root')
);