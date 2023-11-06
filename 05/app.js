'use strict';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Nav from '../04/Nav';

const root = createRoot(document.querySelector('#root'));

root.render(<Nav />);
