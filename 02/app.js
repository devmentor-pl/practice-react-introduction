import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.querySelector('#root'));

const styleHeaderFn = {
  color: 'blue',
};

const styleHeaderCl = {
  color: 'red',
  fontSize: '22px',
  textTransform: 'Uppercase',
};

const HeaderFn = function (props) {
  return <header style={styleHeaderFn}>{props.text}</header>;
};

class HeaderCl extends React.Component {
  render() {
    return <header style={styleHeaderCl}>Moja pierwsza strona w React.</header>;
  }
}

const App = function () {
  return (
    <>
      <HeaderFn text="Moja pierwsza strona w React." />
      <HeaderCl />
    </>
  );
};

root.render(<App />);
