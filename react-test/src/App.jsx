import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage.jsx';

function App() {
  //카테고리 , 상태 작업1
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <div>
      <h1 className="react">React_Test_250820</h1>
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
