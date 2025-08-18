import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // 이전페이지 이동,
    navigate(-1);
  };

  const goArticles = () => {
    // replace: true , 페이지 이동시 현재 페이지 기록에 남기지 않습니다.
    navigate('/articles', { replace: true });
  };

  return (
    <div>
      <header
        style={{ background: 'lightgray', padding: '16px', fontSize: '24px' }}
      >
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
        Header 영역
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
