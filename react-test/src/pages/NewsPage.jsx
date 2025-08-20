import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../components/Categories.jsx';
import NewsList from '../components/NewsList.jsx';

// 페이지의 레이아웃을 담당
const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';
  // Categories 컴포넌트(메뉴)와 NewsList 컴포넌트(기사 목록)를 화면에 보여줌
  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;
