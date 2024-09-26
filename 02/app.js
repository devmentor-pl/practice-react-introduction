import React from 'react';
import ReactDOM from 'react-dom';

const myStyle = {
    backgroundColor: '#966874',
    textAlign: 'center',
    fontSize: '30px',
    border: '2px solid #635356',
}

const txt = 'Moja pierwsza strona w React';

// const Header = () => (
//     <header style = {myStyle}>{txt}</header>
// )

class Header extends React.Component {
    render() {
        return <header style = {myStyle}>{txt}</header>
    }
}

const HeaderStyle= () => (
    <>
        <Header/>
    </>
)

ReactDOM.render(
    <HeaderStyle/>,
    document.querySelector('#root')
);