import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import "../../Styles/Buttons.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container header-layout-wrapper">
        <span className="username">Welcome OluwaSegun</span>
        <Link to="/" className="btn white-btn">
          logout
        </Link>
      </div>
    </header>
  );
};

export default Header;
