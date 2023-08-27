import React from 'react';
import ReactDOM from 'react-dom/client';
import MenuItem from './../03/MenuItem';
const root = ReactDOM.createRoot(document.querySelector('#root'));

class Menu extends React.Component {
  render() {
    return (
      <ul>
        <MenuItem
          text="JS-mozila"
          url="https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=pl"
        />
        <MenuItem text="react.dev" url="https://react.dev/" />
      </ul>
    );
  }
}

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Menu />
      </nav>
    );
  }
}

const App = function () {
  return <Nav />;
};

root.render(<App />);
