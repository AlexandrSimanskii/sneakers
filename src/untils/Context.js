import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
export const CustomContext = createContext();

export const Context = (props) => {
  const [isInBasket, setIsInBasket] = useState([]);
  const [favoritItem, setFavoritItem] = useState([]);
  const [loadingFinish, setLoadingFinish] = useState(false);
  const deleteFromBasket = (id) => {
    axios.delete(`http://localhost:3004/basket/${id}`);

    setIsInBasket((prev) => prev.filter((item) => item.id !== id));
  };

  const value = {
    deleteFromBasket,
    isInBasket,
    setIsInBasket,
    favoritItem,
    setFavoritItem,
    loadingFinish,
    setLoadingFinish,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
