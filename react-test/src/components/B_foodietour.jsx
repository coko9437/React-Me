import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border-color, #e0e0e0);

  &:last-child {
    border-bottom: none;
  }

  // 썸네일 이미지
  .thumbnail {
    margin-right: 1.5rem;
    flex-shrink: 0; /* 반응형, 일그러지지않도록 */
    img {
      display: block;
      width: 260px;
      height: 300px;
      object-fit: cover;
      border-radius: 8px;
    }
  }


  .contents {
    h2 {
      margin: 0 0 0.5rem 0;
      font-size: 1.5rem;
    }
    h3 {
      margin: 0 0 1rem 0;
      font-size: 1.1rem;
      color: #555;
      font-weight: 500;
    }
    p {
      margin: 0;
      line-height: 1.6;
      white-space: normal; /*자동으로 줄바꿈되도록*/
    }
    .place {
      margin-top: 1rem;
      font-style: italic;
      color: #777;
    }
  }
`;

const B_foodietour = ({ article }) => {

  const { MAIN_TITLE, SUBTITLE, ITEMCNTNTS, MAIN_IMG_THUMB, PLACE } = article;


  const imageUrl = MAIN_IMG_THUMB
    ? `https://www.visitbusan.net${MAIN_IMG_THUMB}`
    : 'https://via.placeholder.com/200x160'; //이미지 없으면 Default이미지

  return (
    <NewsItemBlock>

      {MAIN_IMG_THUMB && (
        <div className="thumbnail">
          <img src={imageUrl} alt={MAIN_TITLE} />
        </div>
      )}
      <div className="contents">
        <h2> 제목 : {MAIN_TITLE}</h2>
        <h3>부제목 : {SUBTITLE}</h3>
        <p>작가의 말 : {ITEMCNTNTS}</p>
        <p className="place"><strong>장소 :</strong> {PLACE}</p>
      </div>
    </NewsItemBlock>
  );
};

export default B_foodietour;