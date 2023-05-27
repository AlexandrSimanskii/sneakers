import React, { useEffect, useState, useContext } from "react";
import "./style/style.scss";
import Header from "./component/Header/Header";
import axios from "./untils/axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { CustomContext } from "./untils/Context";
import MyPurchases from "./pages/MyPurchases";

const App = () => {
  const [openBasket, setOpenBasket] = useState(false);
  const [products, setProducts] = useState([]);

  const {
    isInBasket,
    setIsInBasket,
    setFavoritItem,
    setMyPurches,
    setLoadingFinish,
    loadingFinish,
    setAmountBasket,
  } = useContext(CustomContext);

  useEffect(() => {
    try {
      async function fetchData() {
        const basketResponse = await axios.get("/Basket");
        const favoriteResponse = await axios.get("/favorite");
        const itemResponse = await axios.get("/products");
        const myPurchesResponse = await axios.get("/order");
        setLoadingFinish(true);

        setIsInBasket(basketResponse.data);
        setProducts(itemResponse.data);
        setFavoritItem(favoriteResponse.data);
        setMyPurches(myPurchesResponse.data.flat());
      }
      fetchData();
    } catch (error) {
      console.log("erorr in app");
    }
    // eslint-disable-next-line
  }, []);
  const amount = () => {
    return isInBasket.reduce(function (acc, obj) {
      return acc + Number(obj.prise);
    }, 0);
  };
  useEffect(() => {
    setAmountBasket(amount);
    // eslint-disable-next-line
  }, [isInBasket]);

  return (
    <div className="loyout">
      <div className="wrapper">
        <Header setOpenBasket={setOpenBasket} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                openBasket={openBasket}
                setOpenBasket={setOpenBasket}
                products={products}
                loadingFinish={loadingFinish}
                setLoadingFinish={setLoadingFinish}
              />
            }
          />

          <Route
            path="/favorites"
            element={<Favorites loadingFinish={loadingFinish} />}
          />
          <Route
            path="/purches"
            element={<MyPurchases loadingFinish={loadingFinish} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
