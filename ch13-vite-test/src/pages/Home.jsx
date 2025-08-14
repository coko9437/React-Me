import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home홈 화면</h1>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to ="/profile/lsy">lsy의 프로필</Link>
        </li>
        <li>
          <Link to ="/profile/ckm">ckm의 프로필</Link>
        </li>
        <li>
          <Link to ="/articles">게시글 목록</Link>
        </li>
      </ul>

    </div>
  );
};

export default Home;