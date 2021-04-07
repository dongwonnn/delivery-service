import React, { useEffect, useState } from 'react';
import StoreBuild from '../components/StoreBuild';
import FetchBuild from '../components/FetchBuild';
import { useSelector } from 'react-redux';

let startNum = 0;

const TestPage = () => {
  const reduxData = useSelector((state) => state.data.stores);

  const [count, setCount] = useState(0);
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = () => {
      try {
        let seperatedData = reduxData.slice(startNum, startNum + 3);

        startNum += 3;

        setStores((prev) => [...prev, ...seperatedData]);
      } catch (e) {
        console.log(e);
      }
    };

    if (reduxData !== null) fetchData();

    setLoading(false);
  }, [count, reduxData]);

  if (stores === []) {
    return <div>로딩 중..</div>;
  }

  return (
    <>
      <StoreBuild loading={loading} stores={stores} />
      <FetchBuild loading={loading} setCount={setCount} />
    </>
  );
};

export default TestPage;
