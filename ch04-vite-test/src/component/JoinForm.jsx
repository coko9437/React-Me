import React, { useState } from "react";
// 회원가입양식
// 1.username 2.email 3.password 4.passwordConfirm
const JoinForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  // form객체에서, 각각의 멤버변수를 꺼내기
  const { username, email, password, passwordConfirm } = form;

  //이벤트 핸들링 추가
  // 1.onChange 2.onClick
  const onChange = (e) => {
    setForm({
      //기존 객체의 값을 불러오고
      ...form,

      //변경이 있으면 덮어쓰기로 수정
      [e.target.name]: e.target.value,
    });
  };

  const onClick = () => {
    //간단하게 입력란 기본유효성 체크하기, 값이 있는지 여부만 확인.
    if (!username || !email || !password || !passwordConfirm) {
      alert("모든값을 입력해주세요.");
      return;
    }

    //패스워드, 패스워드확인 입력란의 값 일치, 체크
    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
    }
    //단순 알림창
    alert("회원가입 완료");

    //입력란 4개 비우기.
    setForm({
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    });
  };
  return (
    <>
      <h1>간단한 회원가입 화면 복습해보기.</h1>
      <h2>사용자명 : {username}</h2>
      <h3>email : {email}</h3>
      <h3>password : {password}</h3>
      <h3>passwordConfirm : {passwordConfirm}</h3>
      <input
        type="text"
        name="username"
        placeholder="사용자명을 입력해주세요."
        value={username}
        onChange={onChange}
      />

      <input
        type="text"
        name="email"
        placeholder="이메일 입력해주세요"
        value={email}
        onChange={onChange}
      />

      <input
        type="text"
        name="password"
        placeholder="패스워드를 입력해주세요"
        value={password}
        onChange={onChange}
      />

      <input
        type="text"
        name="passwordConfirm"
        placeholder="패스워드를 확인해주세요"
        value={passwordConfirm}
        onChange={onChange}
      />
      <button onClick={onClick}>로그인</button>
    </>
  );
};

export default JoinForm;
