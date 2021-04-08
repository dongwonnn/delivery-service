import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getCat } from '../reducers/data';
import './AllCat.scss';
import { categories } from '../data/categories';

const AllCat = () => {
  // const cat = useSelector((state) => state.data.cat);
  // const loadingCat = useSelector((state) => state.data.GET_CAT);

  // const catDispatch = useDispatch();
  // useEffect(() => {
  //   catDispatch(getCat());
  // }, [catDispatch]);

  return (
    <div className="allCat">
      {/* {loadingCat && '로딩 중'} */}
      {/* {!loadingCat && cat && ( */}
      {categories && (
        <div className="categories">
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
