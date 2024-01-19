import React from 'react';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));
const text = 'React działa!';
const H1 = () => {
  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

root.render(<H1 />);
