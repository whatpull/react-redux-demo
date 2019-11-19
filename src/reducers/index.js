import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// [조합] 리듀서 컴바인
export default combineReducers({
    todos,
    visibilityFilter
})