import React from "react";
import Menu from "./Menu";

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <Menu
                    item={[
                        { text: 'Strona główna', url: '/' },
                        { text: 'www', url: '/www' },
                    ]}
                />
            </nav>
        )
    }
}

export default Nav;