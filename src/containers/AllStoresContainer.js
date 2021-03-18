import React from 'react';
import { connect } from 'react-redux';
import AllStores from '../components/AllStores';
import { getStores } from '../modules/data';

const { useEffect } = React;

const AllStoresContainer = ({ getStores, stores, loadingStores }) => {
  useEffect(() => {
    getStores();
  }, [getStores]);

  return <AllStores stores={stores} loadingStores={loadingStores} />;
};

const mapStateToProps = (state) => ({
  stores: state.data.stores,
  loadingStores: state.data.GET_STORES,
});

const mapDispatchToProps = (dispatch) => ({
  getStores: () => {
    dispatch(getStores());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AllStoresContainer);
