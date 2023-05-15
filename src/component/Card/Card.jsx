import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Card = ({
  setIsInBasket,
  isInBasket,
  item,
  favoritItem,
  setFavoritItem,
}) => {
  const [productLiked, setProductLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setProductLiked(pathname === "/favorites" ? true : false);
    // eslint-disable-next-line
  }, []);

  const onClickAdd = () => {
    setIsAdded((prev) => !prev);

    if (!isAdded && !isInBasket.some((d) => d.id === item.id)) {
      setIsInBasket((prev) => [...prev, item]);

      axios.post("http://localhost:3004/basket", item);
    }
  };

  const addInFavorite = () => {
    if (!favoritItem.some((obj) => obj.id === item.id)) {
      axios
        .post("http://localhost:3004/favorite", item)
        .catch((res) => console.log("err"));
    }
  };

  const deliteFromFavorite = (item) => {
    setFavoritItem((prev) => prev.filter((item) => item.id !== favoritItem.id));

    try {
      axios.delete(`http://localhost:3004/favorite/${item.id}`);
    } catch (error) {
      console.log("err");
    }
  };
  console.log(favoritItem);
  return (
    <div>
      <div key={item.id} className="content__card">
        <div className="content__card-top">
          <img
            onClick={() => {
              !productLiked ? addInFavorite() : deliteFromFavorite();
              setProductLiked((prev) => !prev);
            }}
            className="content__card-heart"
            src={
              productLiked
                ? "/images/icons/like.svg"
                : "/images/icons/unlike.png"
            }
            alt="heart"
          />
        </div>
        <img width={133} src={item.img} alt="sneakers" />
        <h4 className="content__card-title">{item.model}</h4>
        <div className="content__card-prise">
          <div>
            <p>ЦЕНА:</p>
            <p className="content__card-amount">{item.prise} руб</p>
          </div>
          <div>
            <img
              onClick={() => {
                onClickAdd();
              }}
              className="content__card-add"
              src={
                !isAdded ? "/images/icons/add.svg" : "/images/icons/cheked.svg"
              }
              alt="added"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
