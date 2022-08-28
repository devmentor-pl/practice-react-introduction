import React from "react";
import ReactDOM from "react-dom";

import MenuItem from './MenuItem'

ReactDOM.render(
  <MenuItem text="Link" url="https://github.com/"/>,
  document.querySelector('#root')
)