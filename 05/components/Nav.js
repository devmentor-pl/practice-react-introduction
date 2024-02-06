import React from "react";
import Menu from "./Menu";


export default class Nav extends Menu {
    render() {
        return (
            <nav>
                <Menu
                    items={[
                        {text: 'strona główna', url: '/'}, 
                        {text: 'www', url: '/www'}
                    ]}
                />
            </nav>
        )
    }
}