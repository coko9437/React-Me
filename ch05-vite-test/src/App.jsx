import "./App.css";
import React from "react";
import ValidationSample from "./component/ValidationSample";
import ScrollBox from "./component/ScrollBox";

// function App() {
class App extends React.Component {
  render() {
    return (
      <>
        <h1 className="react">ch5. 리액트 버전으로 ref 확인해보기</h1>
        <ValidationSample />
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
