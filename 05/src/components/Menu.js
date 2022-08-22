import React from 'react';
//import MenuItem from '../../../03/src/components/menuItem';


/*const Menu = () => {
    return (
        <ul>
            <MenuItem text={'home'} url={'/'}/>
            <MenuItem text={'kontakt'} url={'/contact'}/>
        </ul>
    );
}*/

const Menu = props => {
    const JSXitems = props.items.map((item)=>
    <li><a href={item.url}></a>{item.text}</li>
    );
    return (
        <ul>
            {JSXitems}
        </ul>
    );
}

export default Menu;
