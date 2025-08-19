import './App.css';
import ColorBox from './components/ColorBox.jsx';
import ColorContext, { ColorProvider } from './contexts/color.jsx';
import SetColors from './components/SetColors.jsx';

function App() {
  return (
    <>
      <h1 className="react">ch15 ContextAPI 전역 저장소 연습</h1>
      <h2>1 전역 저장소 설정, 가져와서 , 사용하는 예1</h2>
      {/*전역 저장소 설저에서, 값의 초기값을 변경하는 세터랑 비슷함*/}
      {/*방법1*/}
      {/*<ColorContext.Provider value={{ color: 'green' }}>*/}

      {/*방법2=====*/}
      <ColorProvider>
        <div>
          <SetColors />
          <ColorBox />
        </div>
      </ColorProvider>
      {/*=====방법2*/}

      {/*방법1*/}
      {/*</ColorContext.Provider>*/}
    </>
  );
}

export default App;
