import React from 'react';
import ReactDOM from 'react-dom';

const root = document.querySelector("#root");

// Komponent klasowy
class HeaderCl extends React.Component {
    render() {
        const headerStyle = {
            background: "linear-gradient(to bottom, yellow, darkgreen)",
            padding: "10px",
            textAlign: "center",
            border: "2px solid darkgreen",
            borderRadius: "10px",
            fontSize: "1.2em",
        };

        return (
            <header style={headerStyle}>
                Moja pierwsza strona w React (klasa)
            </header>
        );
    }
}

// Komponent funkcyjny
const HeaderFn = () => {
    const headerStyle = {
        background: "linear-gradient(to bottom, grey, lightgreen)",
        padding: "10px",
        textAlign: "center",
        border: "2px solid lightgreen",
        borderRadius: "10px",
        fontSize: "1.2em",
    };

    return (
        <header style={headerStyle}>
            Moja pierwsza strona w React (funkcja)
        </header>
    );
}

// Komponent glowny wyswietlajacy oba komponenty dla porownania(nie bylo tego w zadaniu ale dodalem zeby zobaczyc.)
const App = () => {
    return (
        <div>
            <HeaderFn />
            <HeaderCl />
        </div>
    )
};

ReactDOM.render(<App />, root);
