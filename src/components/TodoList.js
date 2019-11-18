import React from 'react';
import ProtoTypes from 'prop-types';
import Todo from './Todo';

// [함수형 컴포넌트] 할 일 리스트
const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map((todo, index) => {
            // {...todo} : 전달방식 확인
            <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
        })}
    </ul>
);

// [프로퍼티] 유형체크
TodoList.protoTypes = {
    todos: ProtoTypes.arrayOf(
        ProtoTypes.shape({
            id: ProtoTypes.number.isRequired,
            completed: ProtoTypes.bool.isRequired,
            text: ProtoTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: ProtoTypes.func.isRequired
}

export default TodoList;
