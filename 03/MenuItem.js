import React from 'react'
import PropTypes from 'prop-types'
import ListStyles from './ListStyles'

const MenuItem = props => {
	const { url, text } = props

	return (
		<>
			<li style={ListStyles()}>
				<a href={url}>{text}</a>
			</li>
		</>
	)
}

MenuItem.propTypes = {
	url: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default MenuItem
