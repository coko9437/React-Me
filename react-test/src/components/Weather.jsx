import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// 날씨 정보를 표시할 영역의 스타일을 지정합니다.
const WeatherBlock = styled.div`
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  color: #555;
  background-color: #e9ecef;
  border-radius: 20px;
  white-space: nowrap; /* 텍스트가 줄바꿈되지 않도록 함 */
`;

const Weather = () => {

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {

        const apiKey = '2c90ed7625f5ecdd802ba169784146dd';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${apiKey}&units=metric&lang=kr`;

        const response = await axios.get(url);
        setWeather(response.data); // 성공 시 날씨 데이터 저장
      } catch (e) {

        console.error("날씨 정보를 불러올수없어요. ㅠㅠ", e);
      }
      setLoading(false); // 로딩 상태 종료
    };

    fetchWeather();
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행

  if (loading) return <WeatherBlock>날씨 로딩 중...</WeatherBlock>;
  if (error) return <WeatherBlock>날씨 정보 오류</WeatherBlock>;
  if (!weather) return null;

  // temp (온도), description(상태)만 추출해서
  const temp = weather.main.temp.toFixed(1); // 소수점 첫째 자리까지 표시
  const description = weather.weather[0].description;

  return (
    <WeatherBlock>
      부산의 날씨: {temp}°C, {description}
    </WeatherBlock>
  );
};

export default Weather;