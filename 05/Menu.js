import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '../03/MenuItem'

const Menu = props => {
	return (
		<ul>
			{props.items.map(item => {
				return <MenuItem text={item.text} url={item.url} />
			})}
		</ul>
	)
}

MenuItem.propTypes = {
	url: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default Menu
