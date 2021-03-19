import React from 'react';
import { connect } from 'react-redux';
import Details from '../components/Details';
import { getDetails } from '../modules/data';

const { useEffect } = React;

const DetailsContainer = ({ getDetails, details, loadingDetails, id }) => {
  useEffect(() => {
    getDetails(id);
  }, [getDetails, id]);

  return <Details details={details} loadingDetails={loadingDetails} />;
};

const mapStateToProps = (state) => ({
  details: state.data.details,
  loadingDetails: state.data.GET_DETAILS,
});

const mapDispatchToProps = (dispatch) => ({
  getDetails: (id) => {
    dispatch(getDetails(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
