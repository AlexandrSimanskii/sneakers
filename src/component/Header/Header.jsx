import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import { CustomContext } from "../../untils/Context";

const Header = ({ setOpenBasket }) => {

  const {amountBasket}= useContext(CustomContext)



  return (
    <header className="header">
      <div className="header__left">
        <img width={40} height={40} src="images/img/logo.png" alt="logo" />
        <div className="header__left-text">
          <h3 className="header__left-title">React sneakers</h3>
          <p className="header__left-subtitle">Магазин лучших кросcовок</p>
        </div>
      </div>

      <ul className="header__right">
        <li className="header__right-li">
          <NavLink to={"/"}>
           
            <img
              onClick={() => setOpenBasket(true)}
              src="/images/icons/basket.svg"
              alt="basket"
            />
          </NavLink>

          <span className="header__right-count">{amountBasket} руб</span>
        </li>
        <li>
          <NavLink className="header-link"  to={"/"}>Главная</NavLink>
        </li>
        <li>
          <NavLink  className="header-link" to={"/favorites"}>Нравится</NavLink>
        </li>

        <li>
          <NavLink  className="header-link" to={"/purches"}>Приобретенный товар</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
