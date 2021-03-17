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

  if (datas === null) {
    return <div>진행 중..</div>;
  }

  return (
    <div className="detail-page">
      <div className="detail-left">
        <img src={datas.poster_image} alt="이미지"></img>
        <div className="detail-categories">
          {datas.menu_category.map((category) => (
            <div className="detail-category" key={category.name}>
              <p>{category.name}</p>
            </div>
          ))}
        </div>
        {datas.menu_category.map((category) => (
          <div className="detail-menus" key={category.name}>
            <p className="detail-menus-category">{category.name}</p>
            {category.menus.map((menu) => (
              <div className="detail-menu" key={menu.id}>
                <div className="detail-menu-info">
                  <p className="menu-title">{menu.title}</p>
                  <p className="menu-price">{menu.price}</p>
                  <p className="menu-desc">{menu.description}</p>
                </div>
                <img src={menu.image} alt="메뉴 사진"></img>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* <div className="detail-right">
        <div className="detail-bill">
          <div className="detail-bill-title">
            <p>주문 표</p>
          </div>
          <div className="detail-bill-content">
            <p>아직 주문 내역이 없습니다.</p>
          </div>
          <button>주문하기</button>
        </div>
      </div> */}
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
