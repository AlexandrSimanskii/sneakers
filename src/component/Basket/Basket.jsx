import React, { useContext, useState,useEffect } from "react";

import { CustomContext } from "../../untils/Context";
import axios from "../../untils/axios";

const Basket = ({ setOpenBasket }) => {
  const [orderIsCompleted, setOrderIsCompleted] = useState(true);

  const {
    myPurches,
    setMyPurches,
    setIsInBasket,
    isInBasket,
    deleteFromBasket,
    amountBasket,
    setAmountBasket
  } = useContext(CustomContext);



  console.log(myPurches);

  const renderMyPurches = async () => {
   try {
    await isInBasket.map((item) => axios.post("/order", item));
    setMyPurches((prev)=>[...prev,isInBasket].flat());
    
    isInBasket.map((item) => axios.delete(`/basket/${item.id}`));
    setIsInBasket([]);
    setOrderIsCompleted(false);
   } catch (error) {
    console.log("error");
    
   }
  };

  return (
    <div className="shadow">
      <div className="overlay"></div>

      <div className="basket">
        <div className="basket__top">
          <h2 className="basket-title">Корзина</h2>
          <img
            onClick={() => setOpenBasket(false)}
            className="basket__card-delite"
            src="/images/icons/closed.svg"
            alt="closed"
          />
        </div>

        {isInBasket.length !== 0 ? (
          <>
            <div className="basket__cards">
              {isInBasket.map((item) => {
                return (
                  <div key={item.id} className="basket__card">
                    <img width={70} height={70} src={item.img} alt="" />
                    <div className="basket__card-model">
                      <p>{item.model}</p>
                      <b>{item.prise}</b>
                    </div>

                    <img
                      onClick={() => {
                        deleteFromBasket(item.id);
                      }}
                      className="basket__card-delite"
                      src="/images/icons/closed.svg"
                      alt="closed"
                    />
                  </div>
                );
              })}
            </div>
            <ul className="basket__bottom">
              <li className="basket__bottom-total">
                <span>Итого:</span>
                <div></div>
                <b>{amountBasket} руб</b>
              </li>
              <li className="basket__bottom-total">
                <span className="basket__bottom-tax">НДС 22%:</span>
                <div></div>
                <b>{Math.round(amountBasket*0.22)}</b>
              </li>
              <li>
                <button
                  onClick={() => {
                    renderMyPurches();
                  }}
                  className="basket__btn"
                >
                  Оформить заказ
                  <img
                    className="basket__btn-full"
                    src="/images/icons/Arrow.svg"
                    alt="arrow"
                  />
                </button>
              </li>
            </ul>
          </>
        ) : (
          <div className="basket__empty">
            <img
              src={
                orderIsCompleted
                  ? "/images/img/emptyBox.png"
                  : "/images/img/orderProcessed.jpg"
              }
              alt="empty box"
            />
            <h2 className="basket__empty-title">
              {orderIsCompleted ? "Корзина пустая" : "Заказ оформлен"}
            </h2>
            <p className="basket__empty-text">
              {orderIsCompleted
                ? " Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                : "Ваш заказ #18 скоро будет передан курьерской доставке"}
            </p>
            <button
              onClick={() => {
                setOpenBasket(false);
              }}
              className="basket__btn"
            >
              <img
                className="basket__btn-empty"
                src="/images/icons/Arrow.svg"
                alt="Arrow"
              />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
