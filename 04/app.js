import React from "react";
import ReactDOM from "react-dom";
import MenuItem from "../03/MenuItem";

const Nav = () => {
    return (
        <>
            <Menu />
        </>
    );
};


const Menu = () => {
    return (
        <>
            <ul>
                <MenuItem text={'home'} url={'/'} />
                <MenuItem text={'kontakt'} url={'/contact'} />
            </ul>
        </>
    );
};

ReactDOM.render(<Nav />, document.querySelector('#root'));
