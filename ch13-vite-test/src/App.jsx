import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Profile from './pages/Profile.jsx';
import Articles from './pages/Articles.jsx';
import Article from './pages/Article.jsx';

function App() {
  return (
    <>
      <h1 className="react">ch13 리액트 라우팅 </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*경로에서, :username 이 부분이 파라미터 정보 전달, 어디에? <Profile />로.
          받는 컴포넌트에서 useParams() 훅스를 이용해서, 정보를 가져오기.
          */}
        <Route path="/profile/:username" element={<Profile />} />
        {/* 방법1. 기본 라우팅 임.*/}
        {/*<Route path="/articles" element={<Articles />} />*/}
        {/*<Route path="/article/:id" element={<Article />} />*/}

      {/*  방법2. 중첩 라우팅 (라우팅 안에 라우팅 추가하기) */}
        <Route path="/articles" element={<Articles />} >
          <Route path=":id" element={<Article />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
