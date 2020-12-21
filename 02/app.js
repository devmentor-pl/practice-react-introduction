import React from 'react';
import ReactDOM from 'react-dom';

const headerStyle = {
  border: '2px solid black',
  fontSize: '0.8rem',
  margin: '10px auto',
  padding: '20px',
  textAlign: 'center',
  width: '300px',
};

const HeaderFn = () => {
  return (
    <header style={headerStyle}>
      <h1>Moja pierwsza strona w React</h1>
    </header>
  );
};

class HeaderCl extends React.Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1>Moja pierwsza strona w React</h1>
      </header>
    );
  }
}

const App = () => {
  return (
    <>
      <HeaderFn />
      <HeaderCl />
    </>
  );
};

ReactDOM.render(React.createElement(App), document.querySelector('#root'));
