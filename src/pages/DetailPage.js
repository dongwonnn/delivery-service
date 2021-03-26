import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import Details from '../components/Details';

const DetailPage = ({ match }) => {
  const storeId = match.params.storeId;

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Details storeId={storeId} />;
};

export default DetailPage;
