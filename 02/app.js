import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

const HeaderFn = () => {
  return (
    <header style={{ color: "violet" }}>Moja pierwsza strona w React</header>
  );
};

class HeaderCl extends React.Component {
  render() {
    return (
      <header style={{ color: "green" }}>Moja pierwsza strona w React</header>
    );
  }
}

root.render(
  <>
    <HeaderFn />
    <HeaderCl />
  </>
);
