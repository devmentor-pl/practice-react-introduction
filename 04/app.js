import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from "C:/Users/grzeg/practice-react-introduction/03/MenuItem.js"

const home = {url:"/", text: "home"};
const contact = {url:"/contact", text: "kontakt"};

class Nav extends React.Component {
    render() {
        return <nav>
                    <Menu/>
                </nav>
    }
}

class Menu extends React.Component {
    render() {
        return <ul>
                <MenuItem { ... home }/>
                <MenuItem { ... contact }/>
             </ul>
    }
}

ReactDOM.render(
    <Nav/>,
    document.querySelector("#root")
)