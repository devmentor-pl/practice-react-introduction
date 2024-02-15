import React from "react";
import { createRoot } from "react-dom/client";
import MenuItem from "../03/components/MenuItem";

// class Menu extends React.Component {
//     render() {
//         return (
//             <ul>
//                 <MenuItem text="home" url="/"></MenuItem>
//                 <MenuItem text="kontakt" url="/contact"></MenuItem>
//             </ul>
//         );
//     }
// }

const FunctionMenu = () => {
    return (
        <ul>
            <MenuItem text="home" url="/"></MenuItem>
            <MenuItem text="kontakt" url="/contact"></MenuItem>
        </ul>
    );
};

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <FunctionMenu />
            </nav>
        );
    }
}

const root = createRoot(document.querySelector("#root"));
// const App = () => <Nav />;
root.render(<Nav />);
