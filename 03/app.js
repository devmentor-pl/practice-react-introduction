import React from 'react';
import createRoot from 'react-dom/client';
import MenuItem from "./MenuItem";
const root = createRoot.createRoot(document.getElementById("root"));

root.render(
  <ul>
    <MenuItem text="Kontakt" url="/contact" />
    <MenuItem text="O firmie" url="/about" />
    <MenuItem text="Usługi" url="/services" />
    <MenuItem text="Nasze dokonania" url="/achievements" />
  </ul>
);
