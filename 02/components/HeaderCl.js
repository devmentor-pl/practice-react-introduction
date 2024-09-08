import React from "react"

const style = {
  display: 'flex',
  justifyContent: 'center',
  width: '400px',
  border: '1px solid green',
  backgroundColor: 'red',
  color: 'white',
  fontSize: '20px'
}

export class HeaderCl extends React.Component {
  render() {
    return (
      <header style={style}>Moja pierwsza strona w React Class</header>
    )
  }
}

export default HeaderCl