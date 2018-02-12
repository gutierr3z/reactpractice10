import { combineReducers } from 'redux';
import BookReducer from './reducer_bookList';

var rootReducer = combineReducers({
    books: BookReducer
});

export default rootReducer;