import React from 'react';
import {createRoot} from 'react-dom/client';
const root = createRoot(document.querySelector('#root'));
const text = 'Moja pierwsza strona w React';
const headerStyle = {
  border: '3px solid green',
  padding: '10px',
  textAlign: 'center',
  fontSize: '30px',
  color: 'red',
};
const HeaderFn = () => {
  const headerFnStyle = {
    color: 'green',
    border: '3px solid red',
    padding: '10px',
    textAlign: 'center',
    fontSize: '25px',
  };
  return (
    <>
      <header style={headerFnStyle}>{text}</header>
    </>
  );
};
root.render(<HeaderFn />);

class HeaderCl extends React.Component {
  render() {
    return <header style={headerStyle}>{text}</header>;
  }
}

root.render(<HeaderCl />);
