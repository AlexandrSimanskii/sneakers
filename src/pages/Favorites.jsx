import axios from "axios";

import React, { useEffect, useContext } from "react";
import Card from "../component/Card/Card";
import { Link } from "react-router-dom";
import { CustomContext } from "../untils/Context";

const Favorites = ({ loadingFinish }) => {
  const {
    isInBasket,
    setIsInBasket,
    favoritItem,
    setFavoritItem,
    deleteFromBasket,
  } = useContext(CustomContext);

  useEffect(() => {
    axios
      .get("http://localhost:3004/favorite")
      .then((res) => setFavoritItem(res.data));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="favorite">
      {favoritItem.length === 0 ? (
        <div className="favorite__empty">
          <img src="./images/img/smile1.png" alt="smile" />
          <h3 className="favorite__empty-title">Закладок нет :(</h3>
          <p className="favorite__empty-subtitle">
            Вы ничего не добавляли в закладки
          </p>
          <Link to={"/"}>
            <button className="basket__btn favorite__empty-btn">
              <img
                className="basket__btn-empty"
                src="/images/icons/Arrow.svg"
                alt="Arrow"
              />
              Вернуться назад
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="favorite__top">
            <div className="favorite__top-btn">
              <img src="/images/icons/to back.svg" alt="" />
            </div>
            <h2 className="favorite__top-title">Мои закладки</h2>
          </div>
          <div className="content__cards">
            {favoritItem.map((item) => {
              return (
                <Card
                  key={item.id}
                  item={item}
                  setIsInBasket={setIsInBasket}
                  isInBasket={isInBasket}
                  favoritItem={favoritItem}
                  setFavoritItem={setFavoritItem}
                  deleteFromBasket={deleteFromBasket}
                  added={isInBasket.some((obj) => obj.id === item.id)}
                  like={true}
                  loadingFinish={loadingFinish}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Favorites;
