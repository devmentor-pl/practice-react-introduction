import React from 'react'
import { createRoot } from 'react-dom/client'
import H1 from './H1'

const root = createRoot(document.querySelector('#root'))

root.render(<H1 />)
