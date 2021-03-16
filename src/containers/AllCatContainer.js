import React from 'react';
import { connect } from 'react-redux';
import AllCat from '../components/AllCat';
import { getCat } from '../modules/data';

const { useEffect } = React;

const AllCatContainer = ({ getCat, cat, loadingCat }) => {
  useEffect(() => {
    getCat();
  }, [getCat]);

  return <AllCat cat={cat} getCat={getCat} loadingCat={loadingCat} />;
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
