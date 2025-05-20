import React from "react";
import { Menu } from "./Menu";
export const Nav = () => {
  return (
    <nav>
      <Menu
        items={[
          { text: "strona główna", url: "/" },
          { text: "www", url: "/www" },
        ]}
      />
    </nav>
  );
};
