import React from 'react';
import { connect } from 'react-redux';
import Details from '../components/Details';
import { getDetails } from '../modules/data';

const { useEffect } = React;

const DetailsContainer = ({ getDetails, details, loadingDetails, storeId }) => {
  useEffect(() => {
    getDetails(storeId);
  }, [getDetails, storeId]);

  return (
    <Details
      details={details}
      loadingDetails={loadingDetails}
      storeId={storeId}
    />
  );
};

const mapStateToProps = (state) => ({
  details: state.data.details,
  loadingDetails: state.data.GET_DETAILS,
});

const mapDispatchToProps = (dispatch) => ({
  getDetails: (storeId) => {
    dispatch(getDetails(storeId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
