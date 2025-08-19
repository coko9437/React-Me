// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import NewsItem from './NewsItem';
//
// //css작업
// const NewsListBlock = styled.div`
//   box-sizing: border-box;
//   padding-bottom: 3rem;
//   width: 768px;
//   margin: 0 auto;
//   margin-top: 2rem;
//   @media screen and (max-width: 768px) {
//     width: 100%;
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }
// `;
//
// // 샘플 더미데이터 이용
// // const sampleArticle = {
// //   title: '제목',
// //   description: '내용',
// //   url: 'http://example.com/',
// //   urlToImage:
// //     'https://sportshub.cbsistatic.com/i/r/2025/08/16/253debd9-29a2-48cd-8b31-501631451ee8/thumbnail/1200x675/db792d9aa7d3d3d9326347b93bd6439c/dricus-khamzat-weighins.jpg',
// // };
//
// const NewsList = ({ category }) => {
//   //실제데이터 연동하기.
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//
//   //useEffect
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true); //비동기적으로 받아오겠다.
//       try {
//           // category 의 값에 따라, url 주소가 동적으로 변경하는 코드로 작성.
//           //https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=본인꺼
//           const query = category === 'all' ? '' : `&category=${category}`;
//
//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=079333a4a3584e238479044411e056f0`,
//         );
//         setArticles(response.data.articles);
//       } catch (e) {
//         console.log(e);
//       }
//       setLoading(false);
//     };
//     fetchData(); // 함수를 호출.
//   }, [category]);
//
//   return (
//     <NewsListBlock>
//       {/*실제 데이터 연동*/}
//       {articles.map((article) => (
//         <NewsItem key={article.url} article={article} />
//       ))}
//       {/*<NewsItem article={sampleArticle} />*/}
//       {/*<NewsItem article={sampleArticle} />*/}
//       {/*<NewsItem article={sampleArticle} />*/}
//       {/*<NewsItem article={sampleArticle} />*/}
//       {/*<NewsItem article={sampleArticle} />*/}
//     </NewsListBlock>
//   );
// };
//
// export default NewsList;
