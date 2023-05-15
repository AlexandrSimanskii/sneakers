import React from "react";
import { Link } from "react-router-dom";

const Header = ({ setOpenBasket }) => {
  return (
    <header className="header">
      <div className="header__left">
        <div></div>
        <img width={40} height={40} src="images/img/logo.png" alt="logo" />
        <div className="header__left-text">
          <h3 className="header__left-title">React sneakers</h3>
          <p className="header__left-subtitle">Магазин лучших кросcовок</p>
        </div>
      </div>

      <ul className="header__right">
        <li className="header__right-li">
          <img
            onClick={() => setOpenBasket(true)}
            src="/images/icons/basket.svg"
            alt="basket"
          />

          <span className="header__right-count">1205 руб</span>
        </li>

        <li>
          <Link to={"/favorites"}>
            <img src="/images/icons/heart.svg" alt="heart" />
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <img src="/images/icons/user.svg" alt="user" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
