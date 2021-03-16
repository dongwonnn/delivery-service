import React from 'react';
import { connect } from 'react-redux';
import AllCategories from '../components/AllCategories';
import { getCat } from '../modules/data';

const { useEffect } = React;

const AllCatContainer = ({ getCat, cat, loadingCat }) => {
  useEffect(() => {
    getCat();
  }, [getCat]);

  return <AllCategories cat={cat} getCat={getCat} loadingCat={loadingCat} />;
};

const mapStateToProps = (state) => ({
  cat: state.data.cat,
  loadingCat: state.data.GET_CAT,
});

const mapDispatchToProps = (dispatch) => ({
  getCat: () => {
    dispatch(getCat());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AllCatContainer);

// export default connect(
//   ({ data }) => ({
//     cat: data.cat,
//     loadingCat: data.loading.GET_CAT,
//   }),
//   {
//     getCat,
//   },
// )(AllCatContainer);
