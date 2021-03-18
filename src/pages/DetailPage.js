import React from 'react';
import DetailsContainer from '../containers/DetailsContainer';

const DetailPage = ({ match }) => {
  const detailId = match.params.id;
  // Details.js
  return <DetailsContainer id={detailId} />;
};

export default DetailPage;
