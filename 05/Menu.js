import React from 'react';
import { MenuItem } from './MenuItem';
import PropTypes from 'prop-types';

export const Menu = ({ items }) => {
	return (
		<ul>
			{items.map(item => (
				<MenuItem key={item.url} text={item.text} url={item.url} />
			))}
		</ul>
	);
};

Menu.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
		}),
	).isRequired,
};
