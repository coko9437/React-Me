import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  // 태그에 직접 정의한 이벤트 핸들링 작업, 따로 분리 작업.
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // JavaScript에서 클래스 메서드는 기본적으로 this와 연결(바인딩)되어 있지 않습니다
    // constructor에서 .bind(this)를 통해 handleChange
    // 안의 this가 항상 현재 컴포넌트를 가리키도록 미리 고정
  }

  // 이벤트 핸들링 따로 정의,
  handleChange(e) {
    //<input> 태그에 글자를 입력할 때마다 이벤트가 실행됩니다.
    this.setState({
      //   message: e.target.value,
      // ->변경
      //<input>이 2개가 될 예정, 각 input 이름에 해당하는 객체를 불러와서 사용하기.
      [e.target.name]: e.target.value,
      //여러 개의 input을 하나의 함수로 처리하기 위한 매우 효율적인 방법

      // e.target.name: 해당 엘리먼트의 name 속성값 ("message" 또는 "username")
      // e.target.value: 해당 엘리먼트의 현재 value (입력된 값)
    });
  }

  handleClick() {
    //<button> 태그를 클릭할 때마다 이벤트가 실행됩니다.
    alert(this.state.username + ":" + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  }

  // 이벤트 추가.
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <>
        <h1>이벤트 연습</h1>
        <h2>1 onChange 연습 해보기. </h2>
        <h3>message : {this.state.message}</h3>
        <h3>username : {this.state.username}</h3>
        {/*  */}
        <input
          type="text"
          name="message"
          placeholder="아무말이나 입력하세요"
          value={this.state.message} // getter, state 객체 안의 message 조회
          // 방법1, 직접 설정
          //   onChange={(e) => {
          //     // setter, state 의 객체의 message 값을 변경.
          //     this.setState({ message: e.target.value });
          //   }}
          // 방법2, 따로 분리 설정.
          onChange={this.handleChange}
          // 추가 키 이벤트 리스너, 엔터 키를 입력시, 클릭 하는 효과 주기.
          onKeyPress={this.handleKeyPress}
        />

        <input
          type="text"
          name="username"
          placeholder="사용자명 입력하기"
          value={this.state.username} // getter, state 객체 안의 message 조회
          onChange={this.handleChange}
          // 추가 키 이벤트 리스너, 엔터 키를 입력시, 클릭 하는 효과 주기.
          onKeyPress={this.handleKeyPress}
        />

        <h2>2 onClick 연습 해보기. </h2>
        <button
          // 방법1, 직접 설정
          //   onClick={() => {
          //     alert(this.state.message);
          //     this.setState({
          //       message: "",
          //     });
          //   }}
          // 방법2, 따로 분리 설정.
          onClick={this.handleClick}
        >
          확인
        </button>
      </>
    );
  }
}

export default EventPractice;
