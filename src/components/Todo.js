import React from 'react';
import ProtoTypes from 'proto-types';

// [함수형 컴포넌트] 할 일
const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
);

// [프로퍼티] 유형체크
Todo.protoTypes = {
    onClick: ProtoTypes.func.isRequired,
    completed: ProtoTypes.bool.isRequired,
    text: ProtoTypes.string.isRequired
}

export default Todo