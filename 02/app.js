import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.querySelector("#root"));

// root.render(
//     React.createElement(
//         'HeaderFn',
//         null,
//         React.createElement(
//             'h1', {
//                 className: 'title'
//             },
//             'Moja pierwsza strona w React'
//         )
//     )
// );

const HeaderCl = () => (
  <h1 className="title"> Moja pierwsza strona w React </h1>
);

const App = () => {
  return (
    <div>
      <HeaderCl />
    </div>
  );
};
root.render(<App />);
