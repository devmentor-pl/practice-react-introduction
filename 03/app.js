// Twoje zadanie polega na utworzenu komponentu <MenuItem/>, który ma renderować element menu tj. <li/> zawierające element <a/>;

// Ten komponent przez props przyjmuje wartości jakie ma renderować tj. <MenuItem text="kontakt" url="/contact"/>.

// Cały komponent zapisz w osobny pliku np. MenuItem.js oraz użyj importu i eksportu, aby go uruchomić w pliku app.js.



import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './MenuItem.js';

const App = () => {
    return (
    <ul>
    <MenuItem text='kontakt' url='/contact' />
</ul>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);