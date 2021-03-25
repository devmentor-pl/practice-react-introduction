import React from "react";
import ReactDOM from "react-dom";

const txtStyle = {
    color: '#122440',
    backgroundColor: '#b7bec9',
    padding: '20px'
}

const H1 = () => (
  <h1>Exercise 2</h1>
);

const Paragraph = () => (
  <p style = {txtStyle}>Moja pierwsza strona w React</p>
);


const HeaderCl = () => {
    return (
        < Paragraph />
    )
}

const HeaderFn = () => {
  return (
    <heading>
      <Paragraph />
    </heading>
  );
};

ReactDOM.render(
    <section>
        <H1 />
        <HeaderFn />
        <HeaderCl />
    </section>,
    document.querySelector("#root")
);
