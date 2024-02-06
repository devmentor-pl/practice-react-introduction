import React from "react";

export default class HeaderCl extends React.Component {
    render() {
        return <h1
                style= {{
                    color: "white",
                    fontSize: "50px",
                    textShadow: "-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000",
                  }}
            >
                {'Moja pierwsza strona w React'}
            </h1>
    }
}