import React from "react";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

const HeaderFn = () => {
  return (
    <>
    <header>Moja pierwsza strona w React</header>
    </>
  )
};

const textStyle = {
  background: 'linear-gradient(212deg, rgba(43, 94, 156, 1) 0%, rgba(140, 137, 104, 1) 67%)',
  fontSize: '36px',
  textAlign: 'center',
  color: 'white',
}

class HeaderCl extends React.Component {
  render() {
    return <header style = {textStyle}>Moja pierwsza strona w React</header>;
  }
}

root.render(<HeaderCl />);