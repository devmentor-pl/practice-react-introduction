import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import MenuItem from '../03/MenuItem';

// const Menu = () => {
// 	const arr = [<MenuItem text='strona główna' url='/' />, <MenuItem text='www' url='/www' />];
// 	const jsx = <ul>{arr}</ul>;
// 	return jsx;
// };

const Menu = (props) => {
    const { items } = props;
    return (
        <ul> {
            items.map(
                item => {
                    const { text, url } = item;
                    return <MenuItem text={text} url={url} />
                })
        }
        </ul>
    )
}

// MenuItem.PropTypes = {
// 	text: PropTypes.string.isRequired,
// 	url: PropTypes.string.isRequired,
// };

export default Menu;
