import React from 'react';
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'));

/* const App = () => {
    const headerStyle = {
        color: '#333', 
        backgroundColor: '#f3f3f3', 
        padding: '10px', 
        borderRadius: '5px', 
        textAlign: 'center',
        fontSize: '1.5em',
    };
    
    return (
            <header style={headerStyle}>Moja pierwsza strona w React.</header>
    );
}; */

class Header extends React.Component {
    render() {
        const headerStyle = {
            color: '#555', 
            backgroundColor: '#f3f3f3', 
            padding: '10px', 
            borderRadius: '5px', 
            textAlign: 'center',
            fontSize: '1.5em',
        };
        
        return (
                <header style={headerStyle}>Moja pierwsza strona w React.</header>
        );
    }
}

const App = () => {
    return (
        <div>
            <Header />
        </div>
    );
};

root.render(<App />);