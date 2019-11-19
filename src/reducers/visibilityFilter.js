import { VisibilityFilters } from '../actions'

// [리듀서] 필터
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}

export default visibilityFilter;