import { createContext } from "react";
import { useState } from "react";

export const CustomContext = createContext();

export const Context = (props) => {
  const [isInBasket, setIsInBasket] = useState([]);

  const [favoritItem, setFavoritItem] = useState([]);

  const value = {
    isInBasket,
    setIsInBasket,
    favoritItem,
    setFavoritItem,
   
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
