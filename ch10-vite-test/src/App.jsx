import './App.css';
import TodoTemplate from './component/TodoTemplate.jsx';
import TodoInsert from './component/TodoInsert.jsx';
import TodoList from './component/TodoList.jsx';
import { useCallback, useRef, useState } from 'react';

// 더미데이터 5000개 만드는 함수
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 5000; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function App() {
  // 원본, 일정 관리 앱의 기본 더미 데이터,
  // const [todos, setTodos] = useState([
  //   { id: 1, text: '오늘 점심 뭐 먹지1', checked: true },
  //   { id: 2, text: '오늘 점심 뭐 먹지2', checked: false },
  //   { id: 3, text: '오늘 점심 뭐 먹지3', checked: true },
  // ]);

  // 성능 측정에 사용하는 더미 데이터.
  const [todos, setTodos] = useState(createBulkTodos);

  // useRef 이용해서, 렌더링에 영향을 받지 않는 값을 사용.
  // const nextId = useRef(4);
  const nextId = useRef(5001);

  // 글쓰기 함수 기능
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // 기존 배열에 todos에 새로운 요소를 추가 후 새배열을 생성.
      // setTodos(todos.concat(todo));
      // 성능최적화 방법1 함수형태로 변경.
      setTodos(todos => todos.concat(todo));
      nextId.current += 1;

    },
    [todos],
  );

  // 지우기 기능,
  const onRemove = useCallback(
    (id) => {
      // 예시 : todos = [
      //   { id: 1, text: '오늘 점심 뭐 먹지1', checked: true },
      //   { id: 2, text: '오늘 점심 뭐 먹지2', checked: false },
      //   { id: 3, text: '오늘 점심 뭐 먹지3', checked: true },
      // ]
      // 삭제 할 아이디 : id =3 번 삭제
      // 순회 : todo.id 1 !== 3 (참)
      // 순회 : todo.id 2 !== 3 (참)
      // 순회 : todo.id 3 !== 3 (거짓)
      // 결과 : todos.filter(todo => todo.id !== id)
      // 새로운 배열 생성
      // [
      //   { id: 1, text: '오늘 점심 뭐 먹지1', checked: true },
      //     { id: 2, text: '오늘 점심 뭐 먹지2', checked: false },
      //   ]
      // setTodos(todos.filter((todo) => todo.id !== id));
      // 성능최적화 방법1 함수형태로 변경.
      setTodos(todos => todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  // 수정하기.
  const onToggle = useCallback(
    // 예시 : todos = [
    //   { id: 1, text: '오늘 점심 뭐 먹지1', checked: true },
    //   { id: 2, text: '오늘 점심 뭐 먹지2', checked: false },
    //   { id: 3, text: '오늘 점심 뭐 먹지3', checked: true },
    // ]
    // 수정할 id : 3번
    // 수정 할 아이디 : id =3 번 수정
    // 순회 : todo.id 1 === 3 (거짓) => todo(기존꺼 유지) 수정 안함
    // 순회 : todo.id 2 === 3 (거짓) => todo(기존꺼 유지) 수정 안함
    // 순회 : todo.id 3 === 3 (참) => {...todo, checked: !todo.checked} 수정함
    (id) => {
      setTodos(
        // todos.map((todo) =>
        //   todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        // ),
        // 성능최적화 방법1 함수형태로 변경.
        (todos) =>
          todos.map((todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo,
          ),
      );
    },
    [todos],
  );

  return (
    <>
      <h1 className="react">ch10 일정 관리 미니 프로젝트 </h1>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </>
  );
}

export default App;
