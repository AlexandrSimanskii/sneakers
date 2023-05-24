import React, { useContext, useEffect } from "react";
import Card from "../Card/Card";
import { CustomContext } from "../../untils/Context";
import axios from "axios";
import { useLocation } from "react-router-dom";
const Inform = ({ loadingFinish, title }) => {
  const { pathname } = useLocation();

  // console.log(pathname);
  const {
    myPurches,
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
        <h2 className="favorite__top-title">{title}</h2>
      </div>
      <div className="content__cards">
        {(pathname === "/purches" ? myPurches : favoritItem).map((item) => {
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
              like={pathname !== "/purches"}
              loadingFinish={loadingFinish}
              pathname={pathname}
            />
          );
        })}
      </div>
    </>
  );
};

export default Inform;
