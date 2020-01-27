import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import newsReducer from './newsReducer';
import passwordReducer from './passwordReducer'

export default combineReducers({
    form: reducer,
    news: newsReducer,
    passwordsData: passwordReducer
});