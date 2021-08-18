import React from 'react';
import ReactDOM from 'react-dom';

const HeaderFn = () => {
    return (
            <h1>
            Moja pierwsza strona w React
            </h1>
    )
}

class HeaderCl extends React.Component {
    render() {
        return (
            <h2>
            Moja pierwsza strona w React
            </h2>
        )
    }
}

const App = () => {
    return (
        <header>
            <HeaderFn/>
            <HeaderCl/>
        </header>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);