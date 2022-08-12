import { element } from "prop-types"
import React from "react"
import MenuElement from "../03/MenuElement.js"

const Menu = () => {

    const listItem = this.props.items.map((element) => { return <MenuElement text={element.text} url={element.url} /> })

    return (
        <>

            {listItem}

        </>
    )

}

export default Menu