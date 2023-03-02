import React from 'react';
import {
    createRoot
} from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

const headerStyles = {
    backgroundColor: 'navy',
    fontFamily: 'arial',
    textAlign: 'center',
    color: 'white',
    padding: '20px',
}

// const App = () => {
//     return (
//         <header
//             className="mainHeader"
//             style={headerStyles}
//         >
//             Moja pierwsza strona stworzona w React!
//         </header>
//     );
// };


class App extends React.Component {
    render() {
        return (
            <header
                className="mainHeader"
                style={headerStyles}
            >
                Moja pierwsza strona stworzona w React!
            </header>);
    };
};

root.render(<App />)