import React from 'react';
import MenuItem from './MenuItem';

export default class Menu extends React.Component {
    render() {

        const { items } = this.props;

        return (
            <ul>
                { items.map( (item) => {
                    const { url , text } = item;
                    return <MenuItem text={ text } url={url}/>
                })}
            </ul>
        )
    }
}
