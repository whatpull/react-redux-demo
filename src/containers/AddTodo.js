import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// [함수형 컴포넌트] 할 일 추가
const AddTodoComponenet = ({ dispatch }) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

// [컨넥트] 링크 컨넥트(일체형)
const AddTodo = connect()(AddTodoComponenet);

export default AddTodo;