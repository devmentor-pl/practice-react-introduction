import React from "react";
import ReactDOM from "react-dom";

const headerStyles = {
  alignItems: "center",
  border: "2px solid #eceae4",
  color: "#a2e1db",
  display: "flex",
  fontFamily: "'Trebuchet MS', 'Helvetiva'",
  fontSize: "2rem",
  fontWeight: "700",
  height: "100%",
  justifyContent: "center",
  padding: "1rem 0",
};

//
// CLASS
//

// class Header extends React.Component {
//   render() {
//     const { text } = this.props;
//     return <header style={headerStyles}>{text}</header>;
//   }
// }

// const App = () => <Header text="Moja pierwsza strona w React! :)" />;

// ReactDOM.render(<App />, document.querySelector("#root"));

//
// FUNCTION
//
const Header = () => (
  <>
    <header style={headerStyles}>Moja pierwsza strona w React!</header>
  </>
);

ReactDOM.render(<Header />, document.querySelector("#root"));
