import { element } from "prop-types"
import React from "react"
import Menu from "./Menu.js"

class Nav extends React.Component {

    render() {

        return (
            <nav>
                <ul>
                    <Menu
                        items={[
                            { text: 'strona główna', url: '/' },
                            { text: 'www', url: '/www' }
                        ]}
                    />


                </ul>
            </nav>
        )
    }


}

export default Nav