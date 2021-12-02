import React from "react";
import MenuItem from "./MenuItem"


class Menu extends React.Component {
    render() {
        const {items} = this.props;
        return (
            <ul>
                {
                    items.map((el) => {
                        const {text, url} = el;
                        return <MenuItem text={text} url={url} />
                    })
                }
            </ul>
        )
    }
}

export default Menu;