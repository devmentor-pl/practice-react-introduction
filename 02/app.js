import React from "react";
import { createRoot } from "react-dom/client";

class HeaderCl extends React.Component {
  render() {
    return <header>Moja pierwsza strona w React cl</header>;
  }
}

const HeaderFn = () => {
  return <header>Moja pierwsza strona w React fn</header>;
};

const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    <HeaderFn />
    <HeaderCl />
  </>
);
