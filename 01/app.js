import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class H1 extends React.Component {
    render() {
        return <h1 className='title'>React działa!</h1>
    }
}
root.render(<H1 />)