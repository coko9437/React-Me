import React, { useState } from "react";

const IterationSample = () => {
  //방법1, 기본 배열 , 컴포넌트 반복
  //   const names = ["사과", "포도", "바나나", "딸기"];
  //   const fruitList = names.map((name, index) => <li key={index}>{name}</li>);

  // 방법2 useState 상태관리로 반복구현.
  const [names, setNames] = useState([
    { id: 1, text: "사과" },
    { id: 2, text: "포도" },
    { id: 3, text: "바나나" },
    { id: 4, text: "딸기" },
    // 객체 자리에, 백엔드에서 넘겨 받은 데이터 타입,
    //  MemberDTO 를 요소로 가지는 리스트 형식.
  ]);

  const [InputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  // 데이터 추가 기능.
  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    // 기존 배열에(names), 추가된 id, text 연결해서, 새로운 배열(nextNames)을 생성.
    const nextNames = names.concat({
      id: nextId,
      text: InputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  //데이터 제거하기.순서1
  const onRemove = (id) => {
    // 예시로, 삭제할 id가 4번일때.
    const nextNames = names.filter((name) => name.id !== id);
    // filter : 전체 요소를 순회해서, 참인 결과인 요소들만으로 구성을 하는 새로운 배열 생성.
    // name.id = 4 이고, id가... 1, 2, 3, 4 순회해서 -> 조건식(!==) 같지않으면 true 비교!
    // -> 4=1 X 참, 4=2 X 참, 4=3 X 참 !!!결론: 4빼고 전부 4랑 같지않다.
    setNames(nextNames);
  };
  const fruitList = names.map((name) => (
    // 데이터제거하기. 순서2
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={InputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{fruitList}</ul>
    </>
  );
};

export default IterationSample;
