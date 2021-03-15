import React from 'react';

const myStyles = {
    fontSize: '30px',
    color: 'black',
    border: '2px solid rgba(0,0,0, 1)',
    backgroundColor: 'rgba(150,150,150, 1)',
}

const HeaderFn = () => <header className="title" style={myStyles}>Moja pierwsza strona w React (fn)</header>

export default HeaderFn;