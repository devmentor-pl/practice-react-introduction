import React from 'react';
import MenuItem from "./MenuItem";

// const Menu = () => {
    // return (
    //   <ul>
        // {/* <MenuItem text="home" url="/" /> */}
        // {/* <MenuItem text="kontakt" url="/contact" /> */}
    //   {/* </ul> */}
    // );
//   };


const Menu = (props) => {

    const items = props.items;

    const MenuItems = items.map(item => {
        const { text, url } = item
        return <MenuItem text={text} url={url} />
    })

    return (
        <ul>
            { MenuItems }
        </ul>
    )
}


export default Menu;
