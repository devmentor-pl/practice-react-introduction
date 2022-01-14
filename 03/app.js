import React from "react";
import ReactDOM from "react-dom";
import MenuItem from "./components/MenuItem";

const MenuElement = () => <MenuItem text={"kontakt"} url="/contact/" />;

ReactDOM.render(<MenuElement />, document.querySelector("#root"));
