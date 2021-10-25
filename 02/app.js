import React from "react";
import ReactDOM from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  padding: "15px 10px",
  borderRadius: "5px",
};

const HeaderFn = () => {
  return <header style={styles}>Moja pierwsza strona w React</header>;
};

class HeaderCl extends React.Component {
  render() {
    return <header style={styles}>Moja pierwsza strona w React</header>;
  }
}

ReactDOM.render(<HeaderFn />, document.querySelector("#root"));
