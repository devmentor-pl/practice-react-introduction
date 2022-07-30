import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const style = {
    border: '1px solid blue',
}

function HeaderFn() {
    return <header style={style}>Moja pierwsza strona w React (fn)</header>;
}

class HeaderCl extends Component {
    render() {
        return <header style={style}>Moja pierwsza strona w React (cl)</header>;
    }
}


ReactDOM.render(
    <section>
        <HeaderFn></HeaderFn>
        <HeaderCl/>
    </section>, 
    document.querySelector('#root')
);