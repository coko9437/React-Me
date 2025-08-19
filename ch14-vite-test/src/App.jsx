import './App.css';
import React, { useCallback, useState } from 'react';
import NewsList from './components/NewsList.jsx';
import Categories from './components/Categories.jsx';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage.jsx';

function App() {
  //카테고리 , 상태 작업1
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <div>
      <h1 className="react">ch14 REST API 연결 연습</h1>
      {/*라우팅 전*/}
      {/*<Categories category={category} onSelect={onSelect} />*/}
      {/*<NewsList category={category} />*/}

      {/*라우팅 후*/}
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
    </div>
  );
}

export default App;
