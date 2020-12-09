import React from 'react'
import ReactDOM from 'react-dom'

const myStyles = {
    color: 'white',
    backgroundColor: 'darkblue',
}

//const H1 = () => (<h1 style = {myStyles}>Moja pierwsza strona w React</h1>)

class H1 extends React.Component {
    render() {
        return <h1 style = {myStyles}>Moja pierwsza strona w React</h1>
    }
}

const App = () => {
    return (
        <>
            <H1/>
        </>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)