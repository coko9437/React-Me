import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Profile from './pages/Profile.jsx';
import Articles from './pages/Articles.jsx';
import Article from './pages/Article.jsx';
import Layout from './layout/Layout.jsx';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login.jsx';
import MyPage from './pages/MyPage.jsx';

function App() {
  return (
    <>
      <h1 className="react">ch13 리액트 라우팅 </h1>
      <Routes>
        {/*Layout 컴포넌트로 감싸기*/}
        <Route path="/" element={<Layout />}>
          {/*<Route path="/" element={<Home />} />*/}
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/*경로에서, :username 이 부분이 파라미터 정보 전달, 어디에 ? <Profile />
          받는 컴포넌트에서 useParams() 훅스를 이용해서, 정보를 가져오기.
          */}
          <Route path="/profile/:username" element={<Profile />} />
          {/*방법1, 기본 라우팅,*/}
          {/*<Route path="/articles" element={<Articles />} />*/}
          {/*<Route path="/article/:id" element={<Article />} />*/}
          {/*방법2, 중첩 라우팅, 라우팅 안에 라우팅 추가하기*/}
        </Route>
        {/*Layout 컴포넌트로 감싸기*/}

        <Route path="/articles" element={<Articles />}>
          {/*children 자리에 중첩 라우팅이 위치 하고 있음. */}
          <Route path=":id" element={<Article />} />
        </Route>

        <Route path ="/login" element = {<Login />} />
        <Route path ="/mypage" element = {<MyPage />} />

        {/* 아무 텍스트나 매칭하고, 이 라우트에서 맨 마지막에 위치한 */}
        {/*  상위의 모든 경로를 찾다가, 일치하는경로가 없으면 여기로 오겠다*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
