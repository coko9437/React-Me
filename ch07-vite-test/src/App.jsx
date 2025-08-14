import './App.css';
import Counter from './component/Counter.jsx';
import Info from './component/Info.jsx';
import { useState } from 'react';
import CountUseReducer from './component/CountUseReducer.jsx';
import InfoUseReducer from './component/InfoUseReducer.jsx';
import Average from './component/Average.jsx';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div>
        <h1 className="react"> ch08 함수형 컴포넌트 hooks</h1>
      </div>
      <div>
        <h2>
          1 useState , Counter 자식 컴포넌트 호출 또는 그리기 또는 렌더링{' '}
        </h2>
        <Counter />

        <button onClick={() => setVisible(!visible)}>
          {visible ? '숨기기' : '보이기'}
        </button>
        <h2>
          2 useState - useEffect, Info자식 컴포넌트 호출 또는 그리기 또는
          렌더링{' '}
        </h2>
        {visible && <Info />}

        <h2>3 useReducer , CounteUseReducer , 상태 관리 hook 사용해보기,</h2>
        <CountUseReducer />

        <h2>3-2 useReducer , InfoUseReducer , 상태 관리 hook 사용해보기,</h2>
        <InfoUseReducer />

        <h2>4 useMemo , Average , 무거운 연산을 기억해서 재사용해보자.,</h2>
        <Average />
      </div>
    </>
  );
}

export default App;
