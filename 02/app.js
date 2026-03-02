import React from "react";
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

const componentStyle = {
  color: 'blue',
  fontSize: '30px',
  textAlign: 'center',
  margin: '20px 0'
}

const ComponentFn = ()  => {
  return (
    <header style={componentStyle}>
      Komponent funkcyjny
    </header>
  )
}

class ComponentCls extends React.Component {
  render() {
    return (
      <header style={componentStyle}>
    Komponent Klasowy
  </header>
    )
  }
} 
  

root.render(
  <>
    <ComponentFn />
    <ComponentCls />
    
  </>
)