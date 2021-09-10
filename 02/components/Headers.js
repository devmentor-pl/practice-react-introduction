import React from 'react';

const style = {
    padding: '20px',
    color: 'blue',
    fontFamily: 'Arial ',
    fontSize: '24px',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,255,.2)',
    border: 'blue 2px solid',
}

const text = 'Moja pierwsza strona w React';

const Header = () => (
    <header style = {style}>{text}</header>
);

export default Header;