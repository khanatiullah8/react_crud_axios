import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <h1 className="logo">
          <Link to="/">react axios CRUD</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
