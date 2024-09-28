// Tym razem Twoim zadaniem będzie utworzenie komponentu <Header/> na dwa sposoby tj.:

// przy wykorzystaniu funkcji
// przy wykorzystniau klas z ES2015
// Pamiętaj, że w kodzie nie mogą istnieć dwa komponenty o tej samej nazwie więc albo dodaj odpowiednie sufixy tj. <HeaderFn/> oraz <HeaderCl/> lub zakomentuj jeden jak będziesz robił drugi.

// Wspomiany komponent ma renderować znacznik <header/> z napisam Moja pierwsza strona w React.

// Dodatkowo spróbuj mu nadać fajny wygląd przy pomocy właściwości .style.

import React from 'react';
import ReactDOM from 'react-dom';

//KOMPONENT KLASOWY nr 1

// const myStyles = {
//     border: '3px solid grey',
//     backgroundColor: '#FFF',
//     width: '100%',
//     height: '80%',
//     textShadow: '1px 1px 1px grey',
//     textAlign: 'center',
//     color: 'grey',
// };

// class HeaderCL extends React.Component {
// render() {
//     return <h1 style = {myStyles}>Moja pierwsza strona w React</h1>
// }
// }

// ReactDOM.render(
//     <HeaderCL/>,
// document.querySelector('#root')
// )

//KOMPONENT FUNKCYJNY nr 2

const HeaderFn = () => {
    return (
        <div>
            <h1>
                Moja pierwsza strona w React
            </h1>
        </div>
    )
}

ReactDOM.render(
    <HeaderFn/>,
    document.querySelector('#root')
);






// nr 3

// ReactDOM.render(
//     <header
//         className='myClass'
//         style={{
//             border: '2px solid grey',
//     textShadow: '1px 1px 1px grey',
//             textAlign: 'center',
//             color: 'pink',
//         }}
//     >Moja pierwsza strona w React.</header>,
//     document.querySelector('#root')
// );



// nr 4

// const myStyles = {
//     border: '3px solid pink',
//     backgroundColor: '#FFF',
//     width: '100%',
//     height: '100%',
//     textShadow: '1px 1px 1px grey',
//     textAlign: 'center',
//     color: 'pink',
// }

// ReactDOM.render(
//     <header
//         className='myClass'
//         style={myStyles}
//     >Moja pierwsza strona w React.</header>,
//     document.querySelector('#root')
// );
