import React from 'react';
import ReactDOM from 'react-dom';



// * przy wykorzystaniu funkcji
const HeaderFn = () => {
    return (
        <header>
            Moja pierwsza strona w Reaact
        </header>
    )
}

ReactDOM.render(
    <HeaderFn />,
    document.querySelector('#root')
);


// * przy wykorzystaniu klas z ES2015

class Header extends React.Component {
    render() {
        return <header>
            Moja pierwsza strona w React
        </header>
    }
}

const HeaderCl = () => {
    return <div style={myStyles}><Header /></div>
}

const myStyles = {
    fontSize: '40px',
    textAlign: 'center',
    paddingTop: '50px',
    color: 'rgb(21 232 243)'

}
ReactDOM.render(
    <HeaderCl/>,
    document.querySelector('#root')
);