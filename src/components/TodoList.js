import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

// [함수형 컴포넌트] 할 일 리스트
const TodoList = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map(todo => (
            // {...todo} : 전달방식 확인
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
    </ul>
);

// [프로퍼티] 유형체크
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList;