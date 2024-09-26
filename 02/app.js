import React from 'react'
import ReactDOM from 'react-dom'

const headerStyle = {
    color: '#C5D86D',
    fontSize: '70px',
    textAlign: 'center',
    fontFamily: 'Apple Chancery, cursive',
    textShadow: '1px 1px black'
}
//Method 1

// const headerElement = () => {
//     return <header style={headerStyle}> Moja pierwsza strona w React</header >
// }


//Method 2

class HeaderElement2 extends React.Component {
    render() {
        return <header style={headerStyle}> Moja pierwsza strona w React</header>
    }
}


const App = () => {
    return <div><HeaderElement2 /></div>

}

ReactDOM.render(
    // headerElement(), 

    App(),
    document.querySelector('#root')
)