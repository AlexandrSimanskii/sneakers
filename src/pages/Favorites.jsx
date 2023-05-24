import React, { useContext } from "react";
import { CustomContext } from "../untils/Context";
import EmptyInfo from "../component/EmptyInfo/EmptyInfo";
import Inform from "../component/Inform/Inform";
// import { useLocation } from "react-router-dom";
const Favorites = ({ loadingFinish }) => {
  const { favoritItem } = useContext(CustomContext);
  // const { pathname } = useLocation();
  return (
    <div className="favorite">
      {favoritItem.length === 0 ? (
        <EmptyInfo
          discription={"Вы ничего не добавляли в закладки"}
          img={"/images/img/smile1.png"}
          title={"Закладок нет :("}
        />
      ) : (
        <Inform
          title={"Mои закладки"}
          loadingFinish={loadingFinish}
          // pathname={pathname}
        />
      )}
    </div>
  );
};

export default Favorites;
