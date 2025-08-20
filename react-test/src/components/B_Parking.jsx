import React from 'react';
import styled from 'styled-components';

const ParkingItemBlock = styled.div`
  padding: 1.5rem;
  background-color: var(--card-bg-color, #ffffff);
  border-radius: 12px;
  box-shadow: 0 4px 12px var(--shadow-color, rgba(0, 0, 0, 0.08));

  & + & {
    margin-top: 1.5rem;
  }

  h2 {
    margin: 0 0 0.75rem 0;
    font-size: 1.5rem;
    color: var(--primary-color, #007bff);
  }

  p {
    display: flex;
    align-items: flex-start;
    margin: 0.5rem 0;
    line-height: 1.6;
    color: #555;
    font-size: 1rem;
    
    strong {
      white-space: nowrap;
      flex-shrink: 0;
      text-align: right;
      margin-right: 12px;
      
      width: 140px; /* 제목들 길이 맞춤 */
      color: #333;
    }
  }
`;

const B_Parking = ({ article }) => {
  const {
    guNm, pkNam, jibunAddr, doroAddr, tponNum,
      pkFm, fnlDt, pkGubun, payMtd, currava,
  } = article;

  const formatInfo = (text) => {
    if (!text || text.trim() === '-') {
      return '정보 없음';
    }
    return text;
  };
  return (
    <ParkingItemBlock>
      <h2>주차장 이름 : {pkNam}</h2>
      <p><strong>관리 기관:</strong> {formatInfo(guNm)}</p>
      <p><strong>소재지 주소:</strong> {formatInfo(doroAddr) !== '정보 없음' ? formatInfo(doroAddr) : formatInfo(jibunAddr)}</p>
      <p><strong>주차장 구분:</strong> {pkGubun} ({pkFm})</p>
      <p><strong>전화번호:</strong> {formatInfo(tponNum)}</p>
      <p><strong>결제 방법:</strong> {formatInfo(payMtd)}</p>
      <p><strong>실시간 주차 가능:</strong> {formatInfo(currava)}</p>
      <p><strong>데이터 기준일:</strong> {formatInfo(fnlDt)}</p>
    </ParkingItemBlock>
  );
};

export default B_Parking;