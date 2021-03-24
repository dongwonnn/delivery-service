import React from 'react';
import Details from '../components/Details';

const DetailPage = ({ match }) => {
  const storeId = match.params.storeId;
  // Details.js
  return <Details storeId={storeId} />;
};

export default DetailPage;
