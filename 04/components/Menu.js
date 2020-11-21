import React from 'react';
import MenuItem from '../../03/components/MenuItem';

const Menu = props => {

    const { elements } = props;
    const web = elements.map(e => {
        const { text, url } = e;
        return (
            <MenuItem key={text} url={url} text={text} />
        )
    })


    return (
        <ul>
            {web}
        </ul>
    )
}

export default Menu;