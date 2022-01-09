import React from "react";
import ReactDOM, { render } from "react-dom";

const H1 = () => <h1 className="title">React działa!</h1>;

const SayHello = () => {
  return (
    <div>
      <H1 />
    </div>
  );
};

ReactDOM.render(<SayHello />, document.querySelector("#root"));
