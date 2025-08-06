import './App.css';

function App() {
  const name = '추교문';
  const number = 0;
  const unVar = undefined;
  const style = {
    backgroundColor: 'black', //background-color
    color: 'aqua',
    fontSize: '48px', // font-size
    fontWeight: 'bold', //font-weight
    padding: 16, // 기본 px
  };

  return (
    //jsx 기본문법(기존 HTML형식) VS 일반적인 자바스크립트 코드
    <div>
      <h1>리액트 jsx 문법 처음 해보기</h1>
      <h2>
        1. 기본 jsx 문법 규칙, 감싸는 부모 태그가 필요함. 현재 오류가 남.{' '}
      </h2>
      <h3>2. 자바스크립트 표현식을 이용해서, 변수 불러오기 이름 : {name} </h3>
      <h3>3. 조건부 연산자(삼항 연산자) 이용해보기.</h3>
      <h4>
        {'조건식'} ? (참일경우 나올컴포넌트) : (거짓일 경우 나올 컴포넌트){' '}
      </h4>
      {name === '이상용' ? (
        <h4>추교문이 맞습니다.</h4>
      ) : (
        <h4>추교문이 아닙니다.</h4>
      )}
      <h3>
        4. 아무것도 나타내고 싶지 않을경우(빈화면으로 나올경우), null
        이용해보기.{' '}
      </h3>
      {name === '추교문' ? <h4>추교문이 맞습니다.</h4> : null}
      <h3>5. '&&' 연산자 이용해보기</h3>
      {name === '추교문' && <h4>추교문이 맞습니다.</h4>}
      <h3>6. falsy 값 0 확인해보기.</h3>
      {number && <h4>0값</h4>}
      <h3>7. undefined, OR(||) 확인해보기.</h3>
      {unVar || '값 : undefined'}
      {/* {unVar && <h4>0값</h4>} */}
      <h3 style={style}>
        8. 인라인 스타일링 , 기존 : background-color, 변경 : backgroundColor
      </h3>
      <h3 className="react">9. class 대신 className 속성을 사용함.</h3>
      <h3>
        10. 닫아야 하는 태그, br태그, input태그는 열기만해도 상관없음. BUT
        jsx안에서는 조금 다름.
      </h3>
      <h3>11. 주석은, 중괄호를 열고, /**/ 중괄호 닫기</h3>
      {/*주석은 이런형식으로 사용 */}
      // 이런 주석은 그대로 나타남. ,/* 이런 주석도 그대로 나타남 */, /*ㅇㅇ*/
    </div>
    // <div>/div> = <Fragmant></Fragmant> = <></>
  );
}

export default App;
