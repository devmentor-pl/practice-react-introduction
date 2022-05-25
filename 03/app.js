import React from 'react'
import ReactDOM from 'react-dom'
import MenuItem from './MenuItem'

const App = () => {
    return (
        <>
            <MenuItem text="O nas" url="/about"/>
            <MenuItem text="Galeria" url="/gallery"/>
            <MenuItem text="Cennik" url="/price"/>
            <MenuItem text="Kontakt" url="/contact"/>
        </>
    )
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)