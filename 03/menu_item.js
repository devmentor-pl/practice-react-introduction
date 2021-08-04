import React from 'react';

class MenuItem extends React.Component {

    render () {

		const styleA = {
			fontSize: '3vw',
			textDecoration: 'none'
		}

        return <li><a style = {styleA} href = {this.props.url}>{this.props.text}</a></li>
	}
}

export default MenuItem