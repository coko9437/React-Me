import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false,
    // errorInfo: null,
  };

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  componentDidCatch(error, info) {
    console.log("없는 값에 접근시 오류 발생하고, 예외 처리 componentDidCatch", {
      error,
      info,
    });
    this.setState({
      errorInfo: info,
    });
  }

  handleReset = () => {
    this.setState({
      error: false,
      errorInfo: null,
    });
  };
  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>에러가 발생했습니다.</h1>
          <button onClick={this.handleReset}>다시 시도</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
