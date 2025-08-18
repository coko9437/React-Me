import React from 'react';
// Redirect 사용하기위해서, Navigate 사용
import {Navigate} from 'react-router-dom';

const MyPage = () => {
  const isLogined = false;
  if (!isLogined) {
    return <Navigate to ="/login" replace ={true}/>;
  }

  return (
    <div>
      <h1> 마이 페이지 입니다.</h1>
    </div>
  );
};

export default MyPage;