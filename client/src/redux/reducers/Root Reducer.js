import { combineReducers } from 'redux';
import authReducer from './Auth Reducer';
import uploadReducer from './Upload Reducer';
import postReducer from './Post Reducer';
import errorReducer from './Error Reducer';
import personReducer from './Person Reducer';

export default combineReducers({
    user: authReducer,
    posts: postReducer,
    uploads: uploadReducer,
    errors: errorReducer,
    person: personReducer,
});