//Style

const myStyle = {
    border: '3px solid black',
    backgroundColor: 'yellow',
    color:'red',
    borderradius: '5px',
};






//Rozwiązanie 

import React from 'react';
import ReactDOM  from 'react-dom';

function HeaderFn() {
    return <header>Moja pierwsza strona w React  (funckja)</header>;
}

class HeaderCl extends React.Component {
    render() {
        return <header>Moja pierwsza strona w React (klasa)</header>;
    }
}


ReactDOM.render(
    <section>
        <HeaderFn></HeaderFn>
        <HeaderCl></HeaderCl>
    </section>,
    document.querySelector('#root')
);






    




