import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Card = ({
  deleteFromBasket,
  setIsInBasket,
  isInBasket,
  item,
  favoritItem,
  setFavoritItem,
  added,
}) => {
  const [productLiked, setProductLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(added);
  const { pathname } = useLocation();

  useEffect(() => {
    setProductLiked(pathname === "/favorites" ? true : false);
    // eslint-disable-next-line
  }, []);

  const onClickAdd = () => {
    // setIsAdded((prev) => !prev);

    if (!isAdded && !isInBasket.some((d) => d.id === item.id)) {
      setIsInBasket((prev) => [...prev, item]);

      axios.post("http://localhost:3004/basket", item);
    }
  };

  const addDeleteFavorite = () => {
    setProductLiked((prev) => !prev);

    if (productLiked) {
      if (favoritItem.some((obj) => obj.id === item.id)) {
      }
      try {
        axios.delete(`http://localhost:3004/favorite/${item.id}`);
      } catch (error) {
        console.log("err");
      }
    } else {
      try {
        axios.post("http://localhost:3004/favorite", item);
      } catch (error) {
        console.log("error");
      }
    }
  };

  
  return (
    <div>
      <div key={item.id} className="content__card">
        <div className="content__card-top">
          <img
            onClick={() => {
              addDeleteFavorite();
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
                !isAdded ? onClickAdd() : deleteFromBasket(item.id);
                setIsAdded((prev) => !prev);
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
