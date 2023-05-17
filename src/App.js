import React, { useEffect, useState, useContext } from "react";
import "./style/style.scss";
import Header from "./component/Header/Header";
import axios from "./untils/axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { CustomContext } from "./untils/Context";

const App = () => {
  const [openBasket, setOpenBasket] = useState(false);
  const [products, setProducts] = useState([]);
  const { setIsInBasket, setFavoritItem } = useContext(CustomContext);

  useEffect(() => {
    async function fetchData() {
      const basketResponse = await axios.get("/Basket");
      const favoriteResponse = await axios.get("/favorite");
      const itemResponse = await axios.get("/products");

      
      setIsInBasket(basketResponse.data);
      setProducts(itemResponse.data);
      setFavoritItem(favoriteResponse.data);
    }
    fetchData()
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
              />
            }
          />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
