import {combineReducers} from 'redux';
import {postsReducer} from './blogReducer';
import {categoriesReducer} from './categoryReducer';
import {authReducer} from './authReducer';


const rootReducer = combineReducers({
  postsReducer,
  categoriesReducer,
  authReducer,
});

export default rootReducer;
