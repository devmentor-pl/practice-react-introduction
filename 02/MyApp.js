import React from "react"
import HeaderFn from "./components/HeaderFn"
import HeaderCl from "./components/HeaderCl"

const style = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap'
}

export const MyApp = () => {
  return (
    <div style={style}>
      <HeaderFn/>
      <HeaderCl/>
    </div>
  )
}

export default MyApp