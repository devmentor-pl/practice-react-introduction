import React from 'react';
import ReactDOM from 'react-dom';


const myStyle = {
    border: '1px solid #red',
    backgroundColor: 'yellow'
}

const heading = (
    <heading>
        <h1 style= {myStyle}>Hello World!</h1>
    </heading>
)

ReactDOM.render(    
    heading, 
    document.querySelector('#root')
);
