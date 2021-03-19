import React, { useEffect, useRef, useState } from 'react';
import CatNav from '../components/CatNav';
import DetailMenus from '../components/DetailMenus';
// import { AiFillStar } from 'react-icons/ai';
import './Details.scss';

const Details = ({ details, loadingDetails }) => {
  const [viewIndex, setViewIndex] = useState(0);
  const contentRef = useRef([]);

  const moveToPage = (index) => () => {
    contentRef.current[index].scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };

  const scrollSpyObserver = new IntersectionObserver(
    (entries) => {
      // do something
      entries.forEach((e, i) => {
        console.log(e);
        // console.log(`${i} : ${e.isVisible}`);
      });
      const { target } = entries.find((entry) => entry.isIntersecting) || {};
      setViewIndex(contentRef.current.indexOf(target));
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    },
  );

  useEffect(() => {
    contentRef.current.forEach((item) => scrollSpyObserver.observe(item));
    return () => {
      contentRef.current.forEach((item) => scrollSpyObserver.unobserve(item));
    };
  }, [scrollSpyObserver]);

  return (
    <div className="detail-page">
      {loadingDetails && '로딩 중'}
      {!loadingDetails && details && (
        <div className="detail-left">
          <img src={details.poster_image} alt="대표 이미지"></img>
          <CatNav
            details={details}
            viewIndex={viewIndex}
            moveToPage={moveToPage}
          />
          {details.menu_category.map((category, idx) => (
            <DetailMenus
              category={category}
              key={category.name}
              ref={(r) => (contentRef.current[idx] = r)}
            />
          ))}
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
