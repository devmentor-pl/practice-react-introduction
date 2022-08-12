import { element } from "prop-types"
import React from "react"
import MenuElement from "../03/MenuElement.js"

const Menu = (props) => {

    const listItem = props.items.map((element) => { return <MenuElement text={element.text} url={element.url} /> })
    console.log(listItem)
    return (
        <>

            {listItem}


        </>
    )

}

export default Menu