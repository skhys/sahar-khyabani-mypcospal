import React from "react";
import "./Header.scss";
// import { Link, NavLink } from "react-router-dom";
// import IsLogo from "../../../assets/images/logo.png";

function Header() {
  return (
    <>
      <div className="header">
      <div className="header__image-hero">
        </div>
        <div className="header__group">
          <section className="header__details">
            <button className="header__btn">Log Symptoms</button>
          </section>
        </div>
      </div>
    </>
  );
}

export default Header;
