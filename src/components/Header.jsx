import React from "react";
const Header = () => {
  return (
    <>
      <header>
        <img id="logo" src="/github logo.png" alt="" />
        <h3
          style={{
            color: "white",
            fontFamily: "sans-serif",
            padding: ".5rem",
            textAlign: "center",
          }}
        >
          <span style={{ color: "#238636" }}>Github </span>Analyzer
        </h3>
      </header>
    </>
  );
};

export default Header;
