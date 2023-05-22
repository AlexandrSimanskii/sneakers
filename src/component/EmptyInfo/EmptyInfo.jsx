import React from "react";
import { Link } from "react-router-dom";
const EmptyInfo = ({ img, discription, title }) => {
  return (
    <div className="favorite__empty">
      <img src={img} alt="smile" />
      <h3 className="favorite__empty-title">{title}</h3>
      <p className="favorite__empty-subtitle">{discription}</p>
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
  );
};

export default EmptyInfo;
