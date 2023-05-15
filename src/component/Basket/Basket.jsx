import React from "react";

const Basket = ({ setOpenBasket, isInBasket, deleteFromBasket }) => {
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
                <b>3211 руб</b>
              </li>
              <li className="basket__bottom-total">
                <span>Налог:</span>
                <div></div>
                <b>12%</b>
              </li>
              <li>
                <button className="basket__btn">
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
            <img src="/images/img/empty box.png" alt="empty box" />
            <h2 className="basket__empty-title">Корзина пустая</h2>
            <p className="basket__empty-text">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
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
