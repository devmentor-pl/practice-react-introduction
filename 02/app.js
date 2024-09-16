console.log('zad 2')

import React from 'react';
import ReactDOM from 'react-dom';

const HeaderFn = () => <header style={{fontSize: '22px', color: 'red'}}>Moja pierwsz strona w React - komponent fn</header>
class HeaderClass extends React.Component {
    render() {
        return <header style={{fontSize: '22px', color: 'green'}}>Moja pierwsz strona w React - komponent class</header>
    }
}

ReactDOM.render(
    <div>
        <HeaderFn />
        <HeaderClass />
    </div>,
    document.querySelector('#root')
)








