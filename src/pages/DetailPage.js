import React from 'react';
import './DetailPage.scss';
import DetailsContainer from '../containers/DetailsContainer';
// import { AiFillStar } from 'react-icons/ai';

const DetailPage = () => {
  return (
    <div>
      <DetailsContainer />
    </div>
  );
};

export default DetailPage;
/* <div className="detail-left">
  <img src={datas.poster_image} alt="이미지"></img>
  <CatNav datas={datas} />
  <DetailMenus datas={datas} />
</div> */

/* <div className="detail-right">
  <div className="detail-bill">
    <div className="detail-bill-title">
      <p>주문 표</p>
    </div>
    <div className="detail-bill-content">
      <p>아직 주문 내역이 없습니다.</p>
    </div>
    <button>주문하기</button>
  </div>
</div> */

/* <p>id : {datas.id}</p>
<p>title : {datas.title}</p>
<p>grade : {datas.grade}</p>
<p>review_count : {datas.review_count}</p>
<p>minimum_order_amount : {datas.minimum_order_amount}</p>
<p>delivery_charge : {datas.delivery_charge}</p>
<p>delivery_time : {datas.delivery_time}</p>
<p>{datas.menu_category[0].name}</p>
<p>{datas.menu_category[0].menus[0].title}</p>
<p>{datas.menu_category[0].menus[0].description}</p> */

/* <div className="detail-store-info">
  <h1>가게 이름 : {datas.title}</h1>
  <div>
    별점 :
    <AiFillStar />
    {datas.grade}
  </div>
  <p>리뷰 개수 : {datas.review_count}</p>
  <p>배달 시간 : {datas.delivery_time}</p>
  <p>배달 비 : {datas.delivery_charge}</p>
  <p>최소 주문 금액 : {datas.minimum_order_amount}</p>
</div> */
