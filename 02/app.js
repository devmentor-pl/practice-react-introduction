import React from 'react';
import ReactDOM from 'react-dom';

const headerFnStyle = {
    textAlign: 'center',
    color: 'brown',
    backgroundColor: 'pink',
    borderRadius: '10px',
    padding: '10px'
}

const headerClStyle = {
    textAlign: 'center',
    color: 'green',
    backgroundColor: 'lightblue',
    borderRadius: '10px',
    padding: '10px'
}

const HeaderFn = () => (
    <h1 className='headerFn' style={headerFnStyle}>Moja pierwsza strona w React!</h1>
)

class HeaderCl extends React.Component {
    render() {
        return <h1 className='headerCl' style={headerClStyle}>Moja pierwsza strona w React!</h1>
    }
}

const App = () => {
    return (
        <>
            <HeaderFn/>
            <HeaderCl/>
        </>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);