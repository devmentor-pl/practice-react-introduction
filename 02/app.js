// Rozwiązanie przy wykorzystaniu funkcji

import React from 'react';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

const getText = () => 'Moja pierwsza strona w React !';

root.render(
    <header>
        {getText()}
    </header>
);