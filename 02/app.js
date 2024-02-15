import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.querySelector("#root"));

const style = {
    border: "1px solid blue",
};

const FunctionFn = () => {
    return <header style={style}>Moja pierwsza strona w React (Fn) </header>;
};

class HeaderC1 extends React.Component {
    render() {
        return <header style={style}>Moja pierwsza strona w React (C1)</header>;
    }
}

root.render(
    <section>
        <FunctionFn></FunctionFn>
        <HeaderC1 />
    </section>
);
