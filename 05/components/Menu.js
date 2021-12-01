import React from "react";
import MenuItems from "./MenuItems"


class Menu extends React.Component {
    render() {
        const {items} = this.props;
        return (
            <ul>
                {
                    items.map((el) => {
                        const {text, url} = el;
                        return <MenuItems text={text} url={url} />
                    })
                }
            </ul>
        )
    }
}

export default Menu;