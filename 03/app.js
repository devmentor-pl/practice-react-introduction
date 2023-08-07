import React from 'react';
import ReactDOM from 'react-dom/client';
import MenuItem from './MenuItem';
const root = ReactDOM.createRoot(document.querySelector('#root'));

const App = function () {
  return <MenuItem text="kontakt" url="/contact" />;
};

root.render(<App />);
