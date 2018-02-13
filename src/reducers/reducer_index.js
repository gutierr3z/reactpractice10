import { combineReducers } from 'redux';
import BookReducer from './reducer_bookList';
import Value from './reducer_value';
import SelectedBookq from './reducer_bookSelected';

var rootReducer = combineReducers({
    books: BookReducer,
    value: Value,
    selectedBook3: SelectedBookq
});

export default rootReducer;