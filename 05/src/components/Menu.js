import React from 'react';
import MenuItem from './MenuItem';



// Need help ! :< 
const arr = [<MenuItem text="home" url="/" />, <MenuItem text="kontakt" url="/contact"/>];

const arr2 = arr.map((el) => {
    const {text, url} = el.props;
    return text, url;
});

console.log(arr2);
class Menu extends React.Component {
    render() {
        return <ul> 
                    <MenuItem text="home" url="/" />
                    <MenuItem text="kontakt" url="/contact" />
                </ul>
    }
}

export default Menu;