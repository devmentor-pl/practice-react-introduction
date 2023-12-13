import React from 'react';

const liEl = {
  listStyleType: 'none',
  backgroundColor: '#1d3557',
  padding: '20px',
  textAlign: 'center',
};

const myStyles = {
  textDecoration: 'underline overline #e63946',
  color: '#f1faee',
  letterSpacing: '2px',
  fontFamily: 'sans-serif',
  textTransform: 'uppercase',
};

export const MenuItem = (props) => {
  const { text, url } = props;
  return (
    <li style={liEl}>
      <a style={myStyles} href={url}>
        {text}
      </a>
    </li>
  );
};

export default MenuItem;
