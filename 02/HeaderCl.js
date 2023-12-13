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

export class GetHeaderCl extends React.Component {
  render() {
    return <header style={myStyles}>{this.props.text}</header>;
  }
}

export default GetHeaderCl;
