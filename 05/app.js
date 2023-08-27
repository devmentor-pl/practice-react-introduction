import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Nav';
const root = ReactDOM.createRoot(document.querySelector('#root'));

const App = function () {
  return <Nav />;
};

root.render(<App />);
