import React from 'react';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.querySelector('#root'));
import Nav from './components/Nav';

root.render(<Nav />);
