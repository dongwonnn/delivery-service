import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCat } from '../reducers/data';
import './AllCat.scss';

const throttle = (func, ms) => {
  let throttled = false;
  return (...args) => {
    if (!throttled) {
      throttled = true;
      setTimeout(() => {
        func(...args);
        throttled = false;
      }, ms);
    }
  };
};

const AllCat = () => {
  const scrollRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [startX, setStartX] = useState(0);

  const onScrollIn = (e) => {
    e.preventDefault();
    setIsClicked(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onScrollOut = () => {
    setIsClicked(false);
  };

  const onScrollMove = (e) => {
    console.log('check');
    if (isClicked) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const onThrottleScrollMove = throttle(onScrollMove, 100);

  return (
    <div className="allCat">
      {/* {loadingCat && '로딩 중'} */}
      {/* {!loadingCat && cat && ( */}
      {categories && (
        <div
          className="categories"
          onMouseDown={onScrollIn}
          onMouseMove={isClicked ? onThrottleScrollMove : null}
          onMouseUp={onScrollOut}
          onMouseLeave={onScrollOut}
          ref={scrollRef}
        >
          {categories.map((category) => (
            <div className="category" key={category.name}>
              <Link to={`/category/${category.text}`}>
                <div className="category-box"></div>
                <p>{category.text}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(AllCat);

// const cat = useSelector((state) => state.data.cat);
// const loadingCat = useSelector((state) => state.data.GET_CAT);

// const catDispatch = useDispatch();
// useEffect(() => {
//   catDispatch(getCat());
// }, [catDispatch]);
