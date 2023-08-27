import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.querySelector('#root'));

const App = function () {
  return <h1>React działa!</h1>;
};

root.render(<App />);
