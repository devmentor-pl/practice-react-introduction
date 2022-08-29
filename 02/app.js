import React from 'react'
import ReactDOM from 'react-dom'


const HeaderFn = () => (
    <header style = {stylesFn}>Moja pierwsza strona w React</header>
)

class HeaderCl extends React.Component {
    render() {
        return <header style = {stylesCl}>Moja pierwsza strona w React</header>
    }
}

const App = () => {
    return (
        <div>
            <HeaderFn/>
            <HeaderCl/>
        </div>
    )
}

const stylesFn = {
    color: 'violet',
    textShadow: '1px 1px 1px black',
}

const stylesCl = {
    color: 'orange',
    textShadow: '1px 1px 1px grey',
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)