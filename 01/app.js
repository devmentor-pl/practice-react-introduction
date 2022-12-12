import React, { startTransition } from 'react';

import {createRoot} from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

root.render(<h1>React jest fajny!</h1>);
