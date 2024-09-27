import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.querySelector("#root"));

// class Nav extends React.Component {
//   render() {
//     return (
//       <nav>
//         <ul>
//           <li>
//             <a href="/">home</a>
//           </li>
//           <li>
//             <a href="/contact">kontakt</a>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }

class Menu extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/contact">kontakt</a>
        </li>
      </ul>
    );
  }
}

const App = () => {
  return (
    <div>
      <nav>
        <Menu />
      </nav>
    </div>
  );
};
root.render(<App />);
