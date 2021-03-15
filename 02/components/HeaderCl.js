import React from 'react';

const myStyles = {
    fontSize: '30px',
    color: 'blue',
    border: '2px solid rgba(0,0,0, 1)',
    backgroundColor: 'rgba(100,120,140, 1)',
}

class HeaderCl extends React.Component {
    render() {
        return <header className="title" style={myStyles}>Moja pierwsza strona w React (class)</header>
    }
}

export default HeaderCl;