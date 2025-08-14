import './App.css';
import Counter from './component/Counter.jsx';
import Info from './component/Info.jsx';
import { useState } from 'react';
import CountUseReducer from './component/CountUseReducer.jsx';
import InfoUseReducer from './component/InfoUseReducer.jsx';
import Average from './component/Average.jsx';
import AverageUseCallback from './component/AverageUseCallback.jsx';
import RefSample from './component/RefSample.jsx';
import AverageUseRef from './component/AverageUseRef.jsx';
import InfoCustomHookSample from './component/InfoCustomHookSample.jsx';

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

                <h2>
                    4 useMemo , Average , 무거운 연산의 결과값을 기억해서 재사용해보자.,
                </h2>
                <Average />

                <h2>5 useCallback , Average , 함수를 기억해서 재사용해보자.,</h2>
                <AverageUseCallback />

                <h2>
                    6 useRef , AverageUseRef ,특정 돔(태그) 직접 접근, 추가 후 포커스 확인
                </h2>
                <AverageUseRef />

                <h2>7 useRef , RefSample ,리렌더링에 영향을 받지 않는 값으로 사용됨</h2>
                <RefSample />

                <h2>
                    8 customHook , UseInputs ,반복 되는 useState 와 onChange 분리해서,
                    재사용하기.{' '}
                </h2>
                <InfoCustomHookSample />
            </div>
        </>
    );
}

export default App;
