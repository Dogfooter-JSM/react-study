import React, { useState, useCallback } from 'react';
import { Route } from 'react-router-dom';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import NewsPage from './pages/NewsPage';

const App = () => {
  // ? : category 값이 선택적이라는 의미
  return <Route path="/:category?" component={NewsPage} />;
};

/*
const App = () => {
  //
  const [category, setCategory] = useState('all');

  // 카테고리 선택
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};
*/

/*
const App = () => {
  return (
    <>
      <Categories />
      <NewsList />
    </>
  );
};
*/

/*
const App = () => {
  //
  const [data, setData] = useState(null);

  // 불러오기 버튼 클릭 핸들러
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=42f99248c4fa4fa7a0f43ce4174dbb3b',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} cols={50} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
};
*/

export default App;
