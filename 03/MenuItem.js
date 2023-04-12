import React from "react";

const MenuItem = props => {
	const { text1, text2, text3, text4, text5 } = props.item;
	const { url1, url2, url3, url4, url5 } = props.url;
	return (
		<ul>
			<li>
				<a href={url1}>{text1}</a>
			</li>
			<li>
				<a href={url2}>{text2}</a>
			</li>
			<li>
				<a href={url3}>{text3}</a>
			</li>
			<li>
				<a href={url4}>{text4}</a>
			</li>
			<li>
				<a href={url5}>{text5}</a>
			</li>
		</ul>
	);
};

export default MenuItem;
