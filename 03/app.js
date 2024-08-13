import React from'react';
import { createRoot } from 'react-dom/client';
import MenuItem from './MenuItem.js'
const root = createRoot(document.querySelector('#root'));
const App = () => <ul><MenuItem text="kontakt" url="/contact"/></ul>;




root.render(<App/>);