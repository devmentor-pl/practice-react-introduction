import React from 'react';
import Menu from './Menu.js'


const Nav = () => {

    return(
        <nav>
     <Menu 
        items={[
            {text: 'strona główna', url: '/'}, 
             {text: 'www', url: '/www'}
         ]}
    />
 </nav>
    )
}

export default Nav;