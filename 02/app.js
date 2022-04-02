import React from "react";
import ReactDOM from "react-dom";

const myStyles = {
    color: "blue",
    backgroundColor: "yellow",
    textTransform: "uppercase",
};

const myStyles1 = {
    color: "pink",
    textDecoration: "underline",
};

const HeaderFn = () => {
    return <h1 style={myStyles}>Moja pierwsza strona w React</h1>;
};

class HeaderCl extends React.Component {
    render() {
        return <h1 style={myStyles1}>Moja pierwsza strona w React</h1>;
    }
}

const Headers = () => {
    return (
        <>
            <HeaderFn />
            <HeaderCl />
        </>
    );
};

ReactDOM.render(<Headers />, document.querySelector("#root"));
