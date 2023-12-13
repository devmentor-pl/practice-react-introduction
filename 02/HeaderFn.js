import React from 'react';

const myStyles = {
  color: '#fefae0',
  backgroundColor: '#283618',
  padding: '10px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

export const GetHeader = (props) => {
  return <header style={myStyles}>{props.text}</header>;
};

export default GetHeader;
