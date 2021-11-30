import React from 'react';
import MenuItem from '../../03/components/MenuItem';


export default class Menu extends React.Component {
    render() {
        return (
            <ul>
                <MenuItem text="Home" url="/"/>
                <MenuItem text="kontakt" url="/contact"/>,
            </ul>
        )
    }
}