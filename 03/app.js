import React from "react";
import { createRoot } from "react-dom/client";
import MenuItem from "./MenuItem";

const root = createRoot(document.querySelector("#root"));

const allTexts = {
	text1: "About us",
	text2: "Our offer",
	text3: "Join us",
	text4: "Photos",
	text5: "Contact us",
};
const allUrls = {
	url1: "/aboutus",
	url2: "/ouroffer",
	url3: "/joinus",
	url4: "/photos",
	url5: "/contactus",
};

const App = () => {
	return <MenuItem url={allUrls} item={allTexts} />;
};

root.render(<App />);
