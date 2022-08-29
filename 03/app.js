import React from 'react'
import ReactDOM from 'react-dom'
import MenuItem from './MenuItem'

const App = () => {
    return (
        <ul>
            <MenuItem text="O nas" url="/about"/>
            <MenuItem text="Galeria" url="/gallery"/>
            <MenuItem text="Cennik" url="/price"/>
            <MenuItem text="Kontakt" url="/contact"/>
        </ul>
    )
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)