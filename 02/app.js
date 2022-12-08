//Style

const functionStyle = {
    border: '3px solid black',
    backgroundColor: 'yellow',
    color:'red',
    borderradius: '5px',
};



//Rozwiązanie przy wykorzystaniu funkcji

import React from 'react';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

const getText = () => 'Moja pierwsza strona w React !';

root.render(
    <headerFn
        style ={functionStyle}
    >
        {getText()}
    </headerFn>
);





//Rozwiązanie z klasami ES2015

/*import React from 'react';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));
 
class Text {
    constructor() {
        this.words = 'Moja pierwsza strona w React!';
    }
} 

const newText = new Text();

root.render(
    <header>
       
    </header>

)
*/
    




