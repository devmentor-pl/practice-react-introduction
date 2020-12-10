import React, { Component } from "react";
import ReactDOM from "react-dom";

const HeaderFn = () => <header>Moja pierwsza strona w React</header>;

class HeaderCl extends Component {
  render() {
    return (
      <header style={{ fontSize: "32px", color: "blue" }}>
        Moja pierwsza strona w React
      </header>
    );
  }
}

ReactDOM.render(<HeaderCl />, document.getElementById("root"));
