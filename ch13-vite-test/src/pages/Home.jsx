import { Link, Route } from 'react-router-dom';
import Profile from './Profile.jsx';

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
        <li>
          <Link to ="/myPage">마이페이지</Link>
        </li>

      </ul>

    </div>
  );
};

export default Home;