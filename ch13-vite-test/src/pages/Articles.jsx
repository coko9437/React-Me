import React from 'react';
// 중첩 라우팅 하기 위해서, Outlet 컴포넌트를 이용해야함.
// import { Link, Outlet } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ArticleItem from './ArticleItem.jsx';

//리팩토링 하기 전 원본 파일 : Articles_Backup.jsx , 참고하기.
const Articles = () => {
  return (
    <div>
      {/*중첩 라우팅 적용하기.*/}
      <Outlet />
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </div>
  );
};

export default Articles;
