import React from 'react';

const liEl = {
  listStyleType: 'none',
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

export const Menu = (props) => {
  return (
    <li style={liEl}>
      <a style={myStyles} href={props.url}>
        {props.text}
      </a>
    </li>
  );
};

export default Menu;
