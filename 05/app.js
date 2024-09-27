import React from "react";
import { createRoot } from 'react-dom/client';
import Nav from "./components/Nav";

const root =
createRoot(document.querySelector('#root'));

const App = () => {
  const menuItems = [
    { text: "strona główna", url: "/" },
    { text: "www", url: "/www" },
  ];

  return (
    <div>
      <h1>My App</h1>
      <Nav menuItems={menuItems} />
    </div>
  );
};

export default App;
