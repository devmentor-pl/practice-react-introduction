import React from "react";
import { createRoot } from "react-dom/client";
import { Nav } from './Nav'

const root = createRoot(document.querySelector('#root'));

const App = () => <Nav/>

root.render(<App />)