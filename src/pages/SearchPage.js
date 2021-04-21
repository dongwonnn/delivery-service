import React, { useEffect, useState } from 'react';
import RectCat from '../components/RectCat';
import { BsSearch } from 'react-icons/bs';
import { stores } from '../data/stores';
import './SearchPage.scss';
import SearchStores from '../components/SearchStores';

const SearchPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [sortStores, setSortStores] = useState([]);

  useEffect(() => {
    if (inputValue !== '') {
      const valueLen = inputValue.length;

      const nextStores = stores.filter(
        (store) => store.name.substring(0, valueLen) === inputValue,
      );

      setSortStores(nextStores);
    }
  }, [inputValue, stores]);

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="seaerch-form">
        <BsSearch />
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          name="inputValue"
          value={inputValue}
          onChange={onChangeInput}
        />
      </div>
      {inputValue === '' ? <RectCat /> : <SearchStores stores={sortStores} />}
    </div>
  );
};

export default SearchPage;
