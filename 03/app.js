import React from "react";
import ReactDOM from "react-dom";
import MenuItem from './menu'

const Menu = () => {
    return (
        <>
            <MenuItem text='kontakt' url='/contact'/>
            <MenuItem text='o nas' url='/aboutus'/>
            <MenuItem text='pomoc' url='/help'/>
        </>
    )
}


ReactDOM.render(
    <Menu/>,
    document.querySelector('#root')
)
