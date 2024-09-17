
import React from 'react';
import ReactDOM from 'react-dom'

const myStyles = {
    border: '1px solid purple',
    backgroundColor: 'purple',
    color: 'white',
    height: '100px',
    fontSize: '60px',
    textAlign: 'center'
}
// 
// const Header = () => {
    // return (
        // <div>
            // {/* <h1 style={ myStyles }> */}
                // {/* Moja pierwsza strona w React */}
            // {/* </h1> */}
        // {/* </div> */}
    // )
// }

class Header extends React.Component {
    render() {
        return <div>
            <h1 style = { myStyles }>Moja pierwsza strona w React</h1>
        </div> 
    }
}

ReactDOM.render(
    <Header/>,
    document.querySelector('#root')
);

