import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref 설정

  constructor(props) {
    super(props);
    console.log('마운트 - 순서1 constructor 생성자 초기화');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      '마운트 - 순서2 또는 업데이트 - 순서1 getDerivedStateFromProps',
    );
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('마운트 - 4 componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('업데이트 - 순서2 shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('언마운트 소멸 단계 componentWillUnmount');
  }

  // 이벤트 핸들러 추가해서, state 값을 변경시, 업데이트 발생함.
  // 참고로 업데이트 발생 조건 4가지 1)Props 전달 2) State 변경 3) 부모 컴포넌트가 리 렌더링 4) 강제로 호출시
  // -> P, S , 부 , 강 부름 -> 다시, 리 렌더링 함. (업데이트 )
  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  // 수동으로 언마운트 호출 테스트
  handleUnmountClick = () => {
    if (this.props.onRequestUnmount) {
      this.props.onRequestUnmount();
    }
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('업데이트 - 순서4 getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('업데이트 - 순서5 componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트 되기 전의 색상 : ', snapshot);
    }
  }

  render() {
    console.log('마운트 - 3 또는 업데이트 - 순서3 render');
    const style = {
      color: this.props.color,
    };
    return (
      <>
        <div>
          {/* 없는 값에 접근해서, 임의로 오류 발생시키기 */}
          {/*{this.props.missing.value}*/}
          <h1 style={style} ref={(ref) => (this.myRef = ref)}>
            this.state.number : {this.state.number}
          </h1>
          <p>this.state.color : {this.state.color}</p>
          <button onClick={this.handleClick}>더하기</button>
          <button onClick={this.handleUnmountClick}>언마운트(내부요청)</button>
        </div>
      </>
    );
  }
}

export default LifeCycleSample;
