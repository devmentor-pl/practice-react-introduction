import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const retroStyle = {
  fontFamily: "'Comic Sans MS', 'Comic Sans', cursive",
};

const retroStyleOnHover = {
  backgroundColor: "red",
};

const HeaderFn = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <header
      className="rotating-border"
      style={isHovered ? { ...retroStyle, ...retroStyleOnHover } : retroStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      headerFn
    </header>
  );
};

class HeaderCl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { isHovered } = this.state;

    return (
      <header
        className="rotating-border"
        style={isHovered ? { ...retroStyle, ...retroStyleOnHover } : retroStyle}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        headerCl
      </header>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(
  <>
    <HeaderFn />
    <HeaderCl />
  </>
);
