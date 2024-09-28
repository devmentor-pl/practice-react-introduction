// W poprzednim zadaniu musiałeś utworzyć komponent <MenuItem/> - prawda? Świetnie! Ponieważ teraz będziemy go potrzebować. To oznacza, że w tym zadaniu też powinieneś go zaimportować.

// Naszym zadaniem jest utworzenie dodatkowych komponentów (na razie zrób to w pliku app.js) o nazwie <Nav/> oraz <Menu />.

// Komponent <Nav/> musi renderować znacznik <nav> oraz zawartość menu tj.

// <nav>
//     <ul>
//         <li><a href="/">home</a></li>
//         <li><a href="/contact">kontakt</a></li>
//     </ul>
// </nav>
// Jednak to komponent <Menu/> renderuje </ul> oraz jego zawartość tj.

// <ul>
//     <li><a href="/">home</a></li>
//     <li><a href="/contact">kontakt</a></li>
// </ul>
// Dlatego docelowo komponent <Nav/> będzie renderował:

// <nav>
//     <Menu />
// </nav>
// W poprzednim zadaniu komponent <MenuItem/> renderował <li/> dlatego wykorzystamy go w <Menu />, który będzie zwracał poniższą strukturę JSX:

// <ul>
//     <MenuItem text="home" url="/">
//     <MenuItem text="kontakt" url="/contact">
// </ul>
// Jeśli wszystko wykonałeś poprawnie to do metody .render w ReactDOM powinieneś przekazać komponent <Nav/>, a na stronie powinieneś zobaczyć listę ul > li > a, która zawiera dwie pozycje.

 
import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from '../03/MenuItem.js';

const Menu = () => {
    return (
        <ul>
            <li><a href="/">home</a></li>
            <li><a href="/contact">kontakt</a></li>
        </ul>
    )
}

const Nav = () => {
    return(
        <nav>
            <Menu/>
        </nav>
    )
}

ReactDOM.render(
    <Nav/>,
    document.querySelector('#root')
);