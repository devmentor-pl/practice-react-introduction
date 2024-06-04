import ReactDOM from 'react-dom'
import React from "react";
import { createRoot } from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector('#root'))

const App = () => {
    return (
        <div>
            <h1 className="title">React działa!</h1>
        </div>
    )
}

root.render(<App />)