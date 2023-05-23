
import React, { useContext } from 'react';
import { CustomContext } from '../untils/Context';
import EmptyInfo from '../component/EmptyInfo/EmptyInfo';
import Inform from '../component/Inform/Inform';






const MyPurchases = ( loadingFinish) => {
const{isInBasket}=useContext(CustomContext)


    
    return (
        <div className="favorite">
        {isInBasket.length === 0 ? (
          <EmptyInfo
            discription={"Вы ничего не добавляли в закладки"}
            img={"/images/img/smile1.png"}
            title={"Закладок нет :("}
          />
        ) : (
          <Inform title={'Мои покупки'}
          loadingFinish={loadingFinish} />
        )}
      </div>
    );
};

export default MyPurchases;