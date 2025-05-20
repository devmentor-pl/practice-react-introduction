import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector('#root'));

const myStyles = {
    textAlign: "center",
    color: "#555",
    paddingTop:"20px",
}
const HeaderFn = () => {
    return (
        <div>
        <h1 style={myStyles}>Moja pierwsza strona w React</h1>
        </div>
    )
}

class H1 extends React.Component {
    render() {
        return <h1 style={myStyles}>Moja pierwsza strona w React</h1>
    }
}

const HeaderCl = () => {
    return (
        <div>
        <H1 />
        </div>
    )
}

root.render(<HeaderCl/>)