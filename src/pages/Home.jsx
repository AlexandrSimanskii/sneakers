import Card from "../component/Card/Card";
import Basket from "../component/Basket/Basket";

import React, { useState, useContext } from "react";
import { CustomContext } from "../untils/Context";
const Home = ({
  addInFavorite,
  deliteFromFavorite,
  products,
  openBasket,
  setOpenBasket,
  loadingFinish,
}) => {
  const [inputSearch, setInputSearch] = useState("");

  const {
   
    isInBasket,
    setIsInBasket,
    setFavoritItem,
    favoritItem,
    deleteFromBasket,
  } = useContext(CustomContext);

  const onChangeSearchInput = (event) => {
    setInputSearch(event.target.value);
  };

  const renderCard = () => {
    const arr = [...Array(8)];
    const createCard = () => {
      return loadingFinish
        ? products.filter((item) =>
            item.model.toLowerCase().includes(inputSearch.toLowerCase())
          )
        : arr;
    };
    return createCard().map((item, idx) => {
      return (
        <Card
          key={loadingFinish ? item.id : idx}
          item={item}
          setIsInBasket={setIsInBasket}
          isInBasket={isInBasket}
          addInFavorite={addInFavorite}
          deliteFromFavorite={deliteFromFavorite}
          favoritItem={favoritItem}
          setFavoritItem={setFavoritItem}
          deleteFromBasket={deleteFromBasket}
      
          like={ favoritItem.some((obj) => obj.id === item.id)}
          added={isInBasket.some((obj) => obj.id ===item.id)}
          loadingFinish={loadingFinish}
        />
      );
    });
  };

  return (
    <>
      {openBasket ? (
        <Basket
          setOpenBasket={setOpenBasket}
          isInBasket={isInBasket}
          deleteFromBasket={deleteFromBasket}
        />
      ) : null}

      <div className="content">
        <div className="content__top">
          <h1>
            {inputSearch ? `Поиск по запросу: ${inputSearch}` : "Все кроссовки"}
          </h1>
          <div className="content__top-search">
            <img src="/images/icons/search.svg" alt="search" />
            <input
              onChange={onChangeSearchInput}
              placeholder="Поиск..."
              type="text"
              value={inputSearch}
            />
            {inputSearch && (
              <button
                onClick={() => setInputSearch("")}
                className="content__top-search__clear"
              >
                Очистить
              </button>
            )}
          </div>
        </div>

        <div className="content__cards">{renderCard()}</div>
      </div>
    </>
  );
};

export default Home;
