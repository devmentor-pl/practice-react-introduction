import React from "react";

const MenuItem = ({ text, url }) => {
    return (
        <>
            <li><a>{text}{url}</a></li>
        </>
    );
};

export default MenuItem;