
import React, { useContext, useState } from 'react';
import { CustomContext } from '../untils/Context';
import EmptyInfo from '../component/EmptyInfo/EmptyInfo';
import Inform from '../component/Inform/Inform';






const MyPurchases = ( loadingFinish) => {
const{isInBasket,myPurches}=useContext(CustomContext)


   console.log(myPurches);
    return (
        <div className="favorite">
        {isInBasket.length === 0 ? (
          <EmptyInfo
            discription={"Вы ничего не покупали"}
            img={"/images/img/smile2.png"}
            title={"Покупок"}
          />
        ) : (
          <Inform title={'Мои покупки'}
          loadingFinish={loadingFinish} />
        )}
      </div>
    );
};

export default MyPurchases;