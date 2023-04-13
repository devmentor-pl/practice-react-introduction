import React from "react";

class HeaderCl extends React.Component {
	render() {
		const text = "Moja pierwsza strona w React";
		const styles = {
			fontSize: "bold",
			color: "pink",
			border: "1px solid pink",
			backgroundColor: "violet",
		};
		return <header style={styles}>{text}</header>;
	}
}

export default HeaderCl;
