import './App.css';
import React from 'react';
import ValidationSample from './component/ValidationSample';
import ScrollBox from './component/ScrollBox';

// function App() {
class App extends React.Component {
  render() {
    return (
      <>
        <h1 className="react">ch5. 리액트 버전으로 ref 확인해보기</h1>
        <ValidationSample />
        {/* 부모에서, 자식으로 ref 라는 속성으로 props 형태로 전달
        부모에서, 자식 컴포넌트의 특정 태그에 접근이 가능함. 
        예시) 스크롤을 조정이 가능한 형태로 확인. 
        */}
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨밑으로가기
        </button>
        <button onClick={() => this.ScrollBox.scrollToTop()}>맨위로</button>
        <button onClick={() => this.ScrollBox.scrollToMiddle()}>가운데</button>
      </>
    );
  }
}

export default App;
