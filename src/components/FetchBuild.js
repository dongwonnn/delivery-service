import React, { useRef, useEffect } from 'react';

const FetchBuild = ({ loading, setCount }) => {
  const fetchMoreTrigger = useRef(null);
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) setCount((prev) => prev + 1);
  });

  useEffect(() => {
    fetchMoreObserver.observe(fetchMoreTrigger.current);
    return () => {
      fetchMoreObserver.unobserve(fetchMoreTrigger.current);
    };
  }, []);

  return (
    <div
      id="fetchMore"
      className={loading ? 'loading' : ''}
      ref={fetchMoreTrigger}
    >
      .
    </div>
  );
};

export default FetchBuild;
