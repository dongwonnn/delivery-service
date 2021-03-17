import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DetailPage.scss';
// import { AiFillStar } from 'react-icons/ai';

const DetailPage = () => {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://ec2-52-79-243-119.ap-northeast-2.compute.amazonaws.com/api/eateries/2',
        );

        setDatas(response.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  console.log(datas.menu_category);

  if (datas === null) {
    return <div>진행 중..</div>;
  }

  return (
    <div className="detail-page">
      <div className="detail-left">
        <div className="detail-image">
          <img src={datas.poster_image} alt="이미지"></img>
        </div>
        <div className="detail-category">
          {datas.menu_category.map((category) => (
            <div key={category.name}>{category.name}</div>
          ))}
        </div>
        <div className="detail-menu"></div>
        <div className="detail-menu"></div>
        <div className="detail-menu"></div>
        <div className="detail-menu"></div>
        <div className="detail-menu"></div>
      </div>

      <div className="detail-right">
        <div className="detail-bill">주문표</div>
      </div>
    </div>
  );
};

export default DetailPage;

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
