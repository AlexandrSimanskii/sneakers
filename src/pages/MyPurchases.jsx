import React, { useContext } from "react";
import { CustomContext } from "../untils/Context";
import EmptyInfo from "../component/EmptyInfo/EmptyInfo";
import Inform from "../component/Inform/Inform";
import { useLocation } from "react-router-dom";

const MyPurchases = (loadingFinish) => {
  const { isInBasket,myPurches } = useContext(CustomContext);

  const { pathname } = useLocation();
  

  return (
    <div className="favorite">
      {myPurches.length === 0 ? (
        <EmptyInfo
          discription={"Вы ничего не покупали"}
          img={"/images/img/smile2.png"}
          title={"Покупок"}
        />
      ) : (
        <Inform
          title={"Мои покупки"}
          loadingFinish={loadingFinish}
          pathname={pathname}
          
        />
      )}
    </div>
  );
};

export default MyPurchases;
