// import React from 'react';
// import MenuItem from './MenuItem';

// const Menu = () => {
//     const arr = [<a>item1</a>, <a>item2</a>];

//     const items = arr.map((item) => {
//         <li>item</li>
//     })
//     return (
//         <ul>
//             <MenuItem text='home' url="/" />
//             <MenuItem text='kontakt' url="/contact" />
//             {arr}
//         </ul>

//     );
// };
// export default Menu;


import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
    const arr = [
        { text: 'strona główna' },
        { text: 'www' },
    ];

    const menuItems = arr.map((item) => (
        <li>
            <MenuItem text={item.text} url="/" />
        </li>
    ));

    return (
        <ul>
            <MenuItem text='home' url="/" />
            <MenuItem text='kontakt' url="/contact" />
            {menuItems}
        </ul>
    );
};

export default Menu;