import React from "react"
import ReactDOM from "react-dom"
import MenuElement from "./MenuElement.js"


const App = () => {
    return (
        <>
            <MenuElement text="contact" url="#contact" />
            <MenuElement text="portfolio" url="#portfolio" />
            <MenuElement text="gallery" url="#gallery" />
        </>

    )
}



ReactDOM.render(
    App(),
    document.querySelector('#root')

)