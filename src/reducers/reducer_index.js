import { combineReducers } from 'redux';
import BookReducer from './reducer_bookList';
import Value from './reducer_value';

var rootReducer = combineReducers({
    books: BookReducer,
    value: Value
});

export default rootReducer;