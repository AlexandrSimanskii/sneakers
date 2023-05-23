import { createContext } from "react";
import { useState } from "react";
import axios from "../untils/axios";
export const CustomContext = createContext();

export const Context = (props) => {
  const [isInBasket, setIsInBasket] = useState([]);
  const [favoritItem, setFavoritItem] = useState([]);
  const [myPurches, setMyPurches] = useState([]);

  const deleteFromBasket = (id) => {
    axios.delete(`/basket/${id}`);
    setIsInBasket((prev) => prev.filter((item) => item.id !== id));
  };

  const isPresentInBasket = (item) => {
    return isInBasket.some((obj) => obj.id === item.id);
  };

  const value = {
    deleteFromBasket,
    isInBasket,
    setIsInBasket,
    favoritItem,
    setFavoritItem,
    isPresentInBasket,
    myPurches,
    setMyPurches,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
