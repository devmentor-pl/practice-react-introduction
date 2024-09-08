import React from "react"

const style = {
  display: 'flex',
  justifyContent: 'center',
  width: '400px',
  border: '1px solid red',
  backgroundColor: 'green',
  color: 'white',
  fontSize: '20px'
}

export const HeaderFn = () => {
  return (
    <header style={style}>Moja pierwsza strona w React Function</header>
  )
}

export default HeaderFn