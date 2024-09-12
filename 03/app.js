import React from "react"
import ReactDOM from "react-dom"
import MenuItem from "./MenuItem"

ReactDOM.render(
    <ul>
        <MenuItem text="Kontakt" url="/contact/" />
        <MenuItem text="O nas" url="/about/" />
        <MenuItem text="Znajdz nas" url="/place/" />
    </ul>
    ,
    document.querySelector('#root')
)