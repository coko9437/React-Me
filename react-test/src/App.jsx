import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage.jsx';

function App() {

  return (
    <div>
      <h1 className="react">React_Test_250820</h1>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
    {/*    react-router-dom을 사용해 URL 경로에 따라 어떤 페이지를 보여줄지 결정.
            => 모든 경로는 NewsPage 컴포넌트를 보여주도록 설정*/}
    </div>
  );
}

export default App;
