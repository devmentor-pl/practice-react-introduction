// Tym razem Twoim zadaniem będzie utworzenie komponentu <Header/> na dwa sposoby tj.:

// przy wykorzystaniu funkcji
// przy wykorzystniau klas z ES2015
// Pamiętaj, że w kodzie nie mogą istnieć dwa komponenty o tej samej nazwie więc albo dodaj odpowiednie sufixy tj. <HeaderFn/> oraz <HeaderCl/> lub zakomentuj jeden jak będziesz robił drugi.

// Wspomiany komponent ma renderować znacznik <header/> z napisam Moja pierwsza strona w React.

// Dodatkowo spróbuj mu nadać fajny wygląd przy pomocy właściwości .style.

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <header
    className='myClass'
    style={ {border: '2px solid grey'} }
    >Moja pierwsza strona w React.</header>,
    document.querySelector('#root')
);

// const myStyles = {
//     border: '2px solid grey',
//     backgroundColor: 'pink',
// }

// ReactDOM.render(
//     <header
//         className='myClass'
//         style={myStyles}
//     >Moja pierwsza strona w React.</header>,
//     document.querySelector('#root')
// );