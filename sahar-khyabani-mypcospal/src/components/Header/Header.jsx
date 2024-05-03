import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <Link to="/">
      <div className="header">
      <div className="header__image-hero">
        </div>
      </div>
      </Link>
    </>
  );
}

export default Header;
