import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { CustomContext } from "../../untils/Context";
import ContentLoader from "react-content-loader";

const Card = ({
  deleteFromBasket,
  setIsInBasket,
  isInBasket,
  item,
  favoritItem,
  setFavoritItem,
  added,
  like,

  pathname,
}) => {
  const [productLiked, setProductLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { loadingFinish } = useContext(CustomContext);
  useEffect(() => {
    setProductLiked(like); // eslint-disable-next-line
  }, [favoritItem]);
  useEffect(() => {
    setIsAdded(added); // eslint-disable-next-line
  }, [isInBasket]);

  const onClickAdd = () => {
    if (!isAdded && !isInBasket.some((d) => d.id === item.id)) {
      setIsInBasket((prev) => [...prev, item]);

      axios.post("http://localhost:3004/basket", item);
    }
  };
  const addDeleteFavorite = async () => {
    if (productLiked && favoritItem.some((obj) => obj.id === item.id)) {
      console.log("delete");
      axios.delete(`http://localhost:3004/favorite/${item.id}`);
      setFavoritItem((prev) => prev.filter((obj) => obj.id !== item.id));
    } else {
      console.log("add");
      await axios.post("http://localhost:3004/favorite", item);
      setFavoritItem((prev) => [...prev, item]);
    }
    setProductLiked((prev) => !prev);
  };

  return (
    <div>
      <div className="content__card">
        {loadingFinish ? (
          <>
            <div className="content__card-top">
              {pathname === "/purches" ? null : (
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
              )}
            </div>
            <img width={133} src={item.img} alt="sneakers" />
            <h4 className="content__card-title">{item.model}</h4>
            <div className="content__card-prise">
              <div>
                <p>ЦЕНА:</p>
                <p className="content__card-amount">{item.prise} руб</p>
              </div>
              <div>
                {pathname === "/purches" ? null : (
                  <img
                    onClick={() => {
                      !isAdded ? onClickAdd() : deleteFromBasket(item.id);
                      setIsAdded((prev) => !prev);
                    }}
                    className="content__card-add"
                    src={
                      isAdded
                        ? "/images/icons/cheked.svg"
                        : "/images/icons/add.svg"
                    }
                    alt="added"
                  />
                )}
              </div>
            </div>
          </>
        ) : (
          <ContentLoader
            speed={2}
            width={210}
            height={240}
            viewBox="0 0 210 260"
            backgroundColor="#e6e6e6"
            foregroundColor="#dcdada"
          >
            <rect x="7" y="0" rx="3" ry="3" width="150" height="91" />
            <rect x="7" y="109" rx="3" ry="3" width="150" height="15" />
            \ <rect x="7" y="133" rx="3" ry="3" width="93" height="15" />
            <rect x="7" y="180" rx="3" ry="3" width="80" height="24" />
            <rect x="118" y="174" rx="3" ry="3" width="32" height="32" />
          </ContentLoader>
        )}
      </div>
    </div>
  );
};

export default Card;
