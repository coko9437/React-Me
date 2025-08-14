import React from 'react';
import '../styles/TodoTemplate.scss';
import { GrSchedules } from 'react-icons/gr';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">
        일정관리
        <GrSchedules />
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
