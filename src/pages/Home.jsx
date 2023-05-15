import Card from "../component/Card/Card";
import Basket from "../component/Basket/Basket";
import axios from "axios";
import React, { useState, useContext } from "react";
import { CustomContext } from "../untils/Context";
const Home = ({
  addInFavorite,
  deliteFromFavorite,

  products,

  openBasket,
  setOpenBasket,
}) => {
  const [inputSearch, setInputSearch] = useState("");
  const {
    isInBasket,
    setIsInBasket,
    setFavoritItem,
    favoritItem,
    count,
    setCount,
  } = useContext(CustomContext);

  const deleteFromBasket = (id) => {
    axios.delete(`http://localhost:3004/basket/${id}`);

    setIsInBasket((prev) => prev.filter((item) => item.id !== id));
  };
  const onChangeSearchInput = (event) => {
    setInputSearch(event.target.value);
  };

  console.log(count);
  return (
    <>
      {openBasket ? (
        <Basket
          setOpenBasket={setOpenBasket}
          isInBasket={isInBasket}
          deleteFromBasket={deleteFromBasket}
          count={count}
          setCount={setCount}
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

        <div className="content__cards">
          {products
            .filter((item) =>
              item.model.toLowerCase().includes(inputSearch.toLowerCase())
            )
            .map((item) => {
              return (
                <Card
                  key={item.id}
                  item={item}
                  setIsInBasket={setIsInBasket}
                  isInBasket={isInBasket}
                  addInFavorite={addInFavorite}
                  deliteFromFavorite={deliteFromFavorite}
                  favoritItem={favoritItem}
                  setFavoritItem={setFavoritItem}
                  count={count}
                  setCount={setCount}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
