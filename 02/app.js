import React from 'react';
import ReactDOM from 'react-dom';

const root = document.querySelector("#root");

// Komponent klasowy
class HeaderCl extends React.Component {
    render() {
        const headerStyle = {
            background: "linear-gradient(to bottom, #85C1E9, #3498DB)",
            padding: "10px",
            textAlign: "center",
            border: "2px solid #3498DB",
            borderRadius: "10px",
            fontSize: "1.2em",
            color: "#2C3E50",
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
        background: "linear-gradient(to top, #AED6F1, #5DADE2)",
        padding: "10px",
        textAlign: "center",
        border: "2px solid #5DADE2",
        borderRadius: "10px",
        fontSize: "1.2em",
        color: "#2C3E50",
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
