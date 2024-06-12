'use strict';
import React from 'react';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.querySelector('#root'));

const styleFn = {
  textAlign: 'center',
  fontSize: '24px',
  marginBottom: '10px',
  backgroundColor: 'red',
};

const HeaderFn = (props) => {
  return <header style={styleFn}>{props.text}</header>;
};

const styleCl = {
  textAlign: 'center',
  fontSize: '24px',
  backgroundColor: 'black',
  color: 'white',
};

class HeaderCl extends React.Component {
  render() {
    const { text } = this.props;
    return <header style={styleCl}>{text}</header>;
  }
}

const App = () => {
  return (
    <>
      <HeaderFn text="Moja pierwsza strona w React" />
      <HeaderCl text="Moja pierwsza strona w React" />
    </>
  );
};

root.render(<App />);
