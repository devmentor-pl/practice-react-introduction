import React from "react";
import { createRoot } from "react-dom/client";

import MenuItem from "./src/components/MenuItem";

const root = createRoot(document.querySelector('#root'))

const App = () => {
  return (
    <>
      <MenuItem text='contact' url='/contact/' />
    </>
  )
}

root.render(<App />)