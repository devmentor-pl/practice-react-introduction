import React from 'react';
import ReactDOM from 'react-dom';

const style = {
    border: '2px solid red',
    backgroundColor: 'green'
}

function HeaderFn() {
    return <header style={style}>Moja pierwsza strona w React - fn</header>
}

class HeaderCl extends React.Component {
    render() {
        return <header style={style}>Moja pierwsza strona w React - cl</header> 
    }
}

ReactDOM.render(
    <section>
        <HeaderFn/>
        <HeaderCl/>
    </section>,
    document.querySelector('#root')
)


