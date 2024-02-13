import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.querySelector("#root"));
const FunctionFn = () => {
    return <header>Moja pierwsza strona w React </header>;
};

class HeaderC1 extends React.Component {
    render() {
        return <header className="header">Moja pierwsza strona w React</header>;
    }
}

root.render(
    <section>
        <FunctionFn></FunctionFn>
        <HeaderC1 />
    </section>
);
