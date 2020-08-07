import React from "react";

import "./NavLinks.scss";
import { ReactComponent as Dashboard } from "../../../assets/icons/dashboard.svg";

const NavLinks = () => {
  return (
    <nav>
      <ul>
        <li> Dashboard</li>
        <li> Wallet</li>
        <li> Support</li>
        <li> Chat</li>
      </ul>
    </nav>
  );
};

export default NavLinks;
