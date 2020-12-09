import React  from 'react'
import ReactDOM from 'react-dom'
import MenuItems from './components/MenuItems'

const App = () => {
    return (
        <>
            <MenuItems text="kontakt" url="/contact"/>
        </>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)