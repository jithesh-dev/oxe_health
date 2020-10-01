import React from "react";
import "./Header.css";
import Logo from "../../img/Logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <img src={Logo} alt="" />
      </div>
    </header>
  );
};

export default Header;
