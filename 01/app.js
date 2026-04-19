import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

const text = 'React działa!';

root.render(<h1>{text}</h1>);
