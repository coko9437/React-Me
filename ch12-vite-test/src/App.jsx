import { useRef, useCallback, useState } from 'react';
import './App.css';

// 순서1, Immer 도구 가져오기.
import { produce } from 'immer';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // 입력값 변경을 처리하는 함수
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      // Spread 연산자를 사용하여 form 객체를 업데이트합니다.
      // 변경전
      // setForm({
      //   ...form,
      //   [name]: value,
      // });
      // 순서2, 변경 후, Immer 적용
      setForm(
        produce(form, (draft) => {
          draft[name] = value;
        }),
      );
    },
    [form], // form 상태가 변경될 때마다 함수를 새로 만듭니다.
  );

  // 폼 제출을 처리하는 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!form.name.trim() || !form.username.trim()) {
        alert('name과 username 입력해주세요');
        return;
      }

      if (data.array.some((item) => item.username === form.username)) {
        alert('이미 존재하는 아이디입니다.');
        return;
      }

      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
        completed: false,
      };

      // Spread 연산자와 concat을 사용하여 새 항목을 배열에 추가합니다.
      // 변경전
      // setData({
      //   ...data,
      //   array: data.array.concat(info),
      // });

      // 순서3, 임머 적용.
      setData(
        produce(form, (draft) => {
          draft.array.push(info);
        }),
      );

      setForm({
        name: '',
        username: '',
      });

      nextId.current += 1;
    },
    [data, form.name, form.username], // data나 form의 값이 변경될 때 함수를 새로 만듭니다.
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    (id) => {
      // Spread 연산자와 filter를 사용하여 특정 항목을 배열에서 제거합니다.
      // 순서4, 임머 적용.
      // setData({
      //   ...data,
      //   array: data.array.filter((info) => info.id !== id),
      // });
      setData(
        produce(data, (draft) => {
          const index = draft.array.findIndex((info) => info.id === id);
          if (index !== -1) {
            draft.array.splice(index, 1); // 해당 항목 삭제
          }
        }),
      );
    },
    [data], // data 상태가 변경될 때 함수를 새로 만듭니다.
  );

  // 항목의 completed 상태를 토글하는 함수
  const onToggle = useCallback(
    (id) => {
      // Spread 연산자와 map을 사용하여 특정 항목의 속성만 변경합니다.
      setData({
        ...data,
        array: data.array.map((info) =>
          info.id === id ? { ...info, completed: !info.completed } : info,
        ),
      });
    },
    [data], // data 상태가 변경될 때 함수를 새로 만듭니다.
  );

  return (
    <div>
      <h1 className="react">ch12 Spread 연산자로 불변성 유지하기</h1>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li
              key={info.id}
              onClick={() => onRemove(info.id)}
              onContextMenu={(e) => {
                e.preventDefault(); // 우클릭 메뉴가 뜨는 것을 방지
                onToggle(info.id);
              }}
              style={{
                textDecoration: info.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
