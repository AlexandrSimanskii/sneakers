import React, { useContext,useEffect } from "react";
import Card from "../Card/Card";
import { CustomContext } from "../../untils/Context";
import axios from "axios";
const Inform = (loadingFinish) => {
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
  );
};

export default Inform;
