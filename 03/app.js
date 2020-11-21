import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MenuItem from './components/MenuItem'

const root = document.querySelector('#root');


const UnList = () => {
    return (
        <ul>
            <MenuItem text="kontakt" url="/contact/"/>
        </ul>
    )
}


ReactDOM.render(<UnList />, root);