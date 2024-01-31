import React from 'react';
import ReactDOM from 'react-dom';

const myStyles = {
    margin: '10px',
    padding: '5px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    border: '3px solid blue',
    borderRadius: '5px',
    backgroundColor: 'lightgreen',
}

const HeaderFn = () => {
    return <header style={myStyles}>My first website in React - function</header>;
}

class HeaderCl extends React.Component {
    render() {
        return <header style={myStyles}>My first website in React - class</header>;
    }
}

ReactDOM.render(
    <section>
        <HeaderFn />
        <HeaderCl />
    </section>,
    document.querySelector('#root')
);
