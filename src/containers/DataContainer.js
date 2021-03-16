import React from 'react';
import { connect } from 'react-redux';
import AllCategories from '../components/AllCategories';
import { getCat } from '../modules/data';

const { useEffect } = React;

const DataContainer = ({ getCat, cat }) => {
  useEffect(() => {
    getCat();
  }, [getCat]);

  return <AllCategories cat={cat} getCat={getCat} />;
};

const mapStateToProps = (state) => ({
  cat: state.data.cat,
});

const mapDispatchToProps = (dispatch) => ({
  getCat: () => {
    dispatch(getCat());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);

// export default connect(
//   ({ data }) => ({
//     cat: data.cat,
//     loadingCat: data.loading.GET_CAT,
//   }),
//   {
//     getCat,
//   },
// )(DataContainer);
