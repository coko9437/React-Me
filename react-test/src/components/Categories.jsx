import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Weather from './Weather.jsx';

const categories = [
    {
        name: 'all',
        text: '전체보기',
    },
    {
        name: 'business',
        text: '비즈니스',
    },
    {
        name: 'entertainment',
        text: '연예',
    },
    {
        name: 'health',
        text: '건강',
    },
    {
        name: 'science',
        text: '과학',
    },
    {
        name: 'sports',
        text: '스포츠',
    },
    {
        name: 'technology',
        text: '기술',
    },
    {
        name: 'general',
        text: '일반',
    },
  // 공공데이터 추가작업
  {
    name: 'busanParking',
    text: '부산주차장',
  },

  {
    name: 'busanFoodietour',
    text: '푸디투어',
  },
];

// css 작업,
const CategoriesBlock = styled.div`
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  gap: 1rem; /* 아이템 간 간격 */
  flex-wrap: wrap; /* 화면이 작아지면 줄바꿈 */
  margin-bottom: 2rem;
  padding: 1rem 0;
`;

const Category = styled(NavLink)`
    /* 기본 스타일 */
    padding: 0.75rem 1.5rem;
    border-radius: 20px;
    background-color: var(--card-bg-color);
    color: var(--primary-color);
    border: 1px solid var(--border-color);
    font-weight: 600;
    text-decoration: none;
    white-space: pre;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    /* 호버 효과 */
    &:hover {
        background-color: var(--primary-color);
        color: white;
        transform: scale(1.05); /* 살짝 커지는 효과 */
        box-shadow: 0 4px 10px var(--shadow-color);
    }

    /* 활성화 상태 스타일 */
    &.active {
        background-color: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
    }
`;

const Categories = () => {
  // JSX 부분은 기존 로직을 그대로 유지합니다.
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
      <Weather/>
    </CategoriesBlock>
  );
};

export default Categories;
