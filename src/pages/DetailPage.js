import React from 'react';
import DetailsContainer from '../containers/DetailsContainer';

const DetailPage = ({ match }) => {
  const storeId = match.params.storeId;
  // Details.js
  return <DetailsContainer storeId={storeId} />;
};

export default DetailPage;
