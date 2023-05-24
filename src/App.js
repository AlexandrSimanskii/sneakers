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
  const [loadingFinish, setLoadingFinish] = useState(false);
  const { setIsInBasket, setFavoritItem, setMyPurches } =
    useContext(CustomContext);

  useEffect(() => {
    async function fetchData() {
      const basketResponse = await axios.get("/Basket");
      const favoriteResponse = await axios.get("/favorite");
      const itemResponse = await axios.get("/products");
      const myPurchesResponse = await axios.get("/order");
      setLoadingFinish(true);

      setIsInBasket(basketResponse.data);
      setProducts(itemResponse.data);
      setFavoritItem(favoriteResponse.data);
      setMyPurches(myPurchesResponse.data);
    }
    fetchData();
    // eslint-disable-next-line
  }, []);

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
