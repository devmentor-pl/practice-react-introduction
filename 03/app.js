import React from 'react';
import ReactDOM from 'react-dom/client';
import MenuItem from './MenuItem';
const root = ReactDOM.createRoot(document.querySelector('#root'));

const App = function () {
  return <MenuItem text="onet" url="https://www.onet.pl/" />;
};

root.render(<App />);
