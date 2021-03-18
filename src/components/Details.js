import React from 'react';
import CatNav from '../components/CatNav';
import DetailMenus from '../components/DetailMenus';
import { AiFillStar } from 'react-icons/ai';
import './Details.scss';

const Details = ({ details, loadingDetails }) => {
  return (
    <div className="detail-page">
      {loadingDetails && '로딩 중'}
      {!loadingDetails && details && (
        <div className="detail-left">
          <img src={details.poster_image} alt="이미지"></img>
          <CatNav details={details} />
          <DetailMenus details={details} />
        </div>
      )}
    </div>
  );
};

export default Details;

// <div className="detail-right">
//   <div className="detail-bill">
//     <div className="detail-bill-title">
//       <p>주문 표</p>
//     </div>
//     <div className="detail-bill-content">
//       <p>아직 주문 내역이 없습니다.</p>
//     </div>
//     <button>주문하기</button>
//   </div>
//   <div className="detail-store-info">
//     <h1>가게 이름 : {details.title}</h1>
//     <div>
//       별점 :
//       <AiFillStar />
//       {details.grade}
//     </div>
//     <p>리뷰 개수 : {details.review_count}</p>
//     <p>배달 시간 : {details.delivery_time}</p>
//     <p>배달 비 : {details.delivery_charge}</p>
//     <p>최소 주문 금액 : {details.minimum_order_amount}</p>
//   </div>
// </div>
