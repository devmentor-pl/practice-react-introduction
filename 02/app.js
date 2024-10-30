import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

const HeaderFn = () => {
    return (
        <header>
            <h1 HeaderFn="title" style={{ color: 'red', textAlign: 'center', padding: '20px'}} >Moja pierwsza strona w React</h1>
        </header>
        );
};

root.render(<HeaderFn />); 

/*class HeaderCl extends React.Component {
    render() {
        return <header className="title"  style={{ color: 'green', textAlign: 'center', padding: '10px' }}>Moja pierwsza strona w React</header>;
    }
}
const HeaderClEl = () => {
    return (
        <div>
            <H1 />
        </div>
    );
};
root.render(<HeaderCl />);*/