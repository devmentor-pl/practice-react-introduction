import React from "react";

const HeaderFn = () => {
    const exampleStyle = {
        backgroundColor: 'navy',
        boxShadow: '0 0 10px blue',
        color: 'blue',
        font: '60px bold',
        marginTop: '30px',
        textAlign: 'center'
    }

    return (
        <header style={exampleStyle}>Moja pierwsza strona w React</header>
    )
};

export default HeaderFn;
