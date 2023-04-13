import React from "react";

const HeaderFn = () => {
	const text = "Moja pierwsza strona w React";
	const styles = {
		fontSize: "bold",
		color: "violet",
		border: "1px solid violet",
		backgroundColor: "pink",
	};
	return <header style={styles}>{text}</header>;
};

export default HeaderFn;
