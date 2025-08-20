import axios from 'axios';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import usePromise from '../lib/usePromise.jsx';
import B_Parking from './B_Parking.jsx'; // B_Parking 컴포넌트 임포트
import B_foodietour from './B_foodietour.jsx';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {

  const sendData = () => {
    const query = category === 'all' ? '' : `&category=${category}`;

    if (category === 'busanParking') {

      return axios.get(
        `https://apis.data.go.kr/6260000/BusanPblcPrkngInfoService/getPblcPrkngInfo?serviceKey=aEdzI1bgEcVpFBjiZjzeOwrHszga7WIoSDv4dHHXlkCUksB2IV70lTM2NHTa2tYt0htOEyhxFSaM2%2FNpBih1aQ%3D%3D&numOfRows=10&pageNo=1&resultType=json`,
      );
    }
    else if (category === 'busanFoodietour') {

      return axios.get(
        `https://apis.data.go.kr/6260000/FoodieService/getFoodieKr?serviceKey=aEdzI1bgEcVpFBjiZjzeOwrHszga7WIoSDv4dHHXlkCUksB2IV70lTM2NHTa2tYt0htOEyhxFSaM2%2FNpBih1aQ%3D%3D&numOfRows=10&pageNo=1&resultType=json`,
      );
    }
    else {
      return axios.get(
        `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=079333a4a3584e238479044411e056f0`,
      );
    }
  };

  const [loading, response, error] = usePromise(sendData, [category]);


  if (loading) {
    return <NewsListBlock>대기중입니다.</NewsListBlock>;
  }
  if (!response) {
    return null;
  }
  if (error) {
    return <NewsListBlock>에러가 발생했습니다.</NewsListBlock>;
  }


  const data =
    category === 'busanParking'
      ? response?.data?.response?.body?.items?.item || []
      : category === 'busanFoodietour'
        ? response?.data?.getFoodieKr?.item || []
        : response?.data?.articles || [];

  return (
    <NewsListBlock>
      {/* ✅ [수정] 'B_foodietour'에 대한 렌더링 로직을 추가합니다. */}
      {category === 'busanParking' ? (
        data.map((item) => <B_Parking key={item.mgntNum} article={item} />)
      ) : category === 'busanFoodietour' ? (
        data.map((item) => <B_foodietour key={item.UC_SEQ} article={item} />)
      ) : (
        data.map((article) => <NewsItem key={article.url} article={article} />)
      )}
    </NewsListBlock>
  );
};

export default NewsList;