import news from '../apis/news';
import {
    SIGN_IN,
    CREATE_NEWS,
    EDIT_NEWS,
    DELETE_NEWS,
    FETCH_NEWS,
    FETCH_ONE_NEWS,
    LOGIN_INPUT,
    PASSWORD_INPUT,
    AUTORIZATION_STATUS
} from './types';
import history from '../history';

export const signIn = () => async (dispatch) => {
    const response = await news.get('/autorization');

    dispatch({ type: SIGN_IN, payload: response.data });
};

export const createNews = (formValues) => async (dispatch) => {
    const response = await news.post('/news', {...formValues});

    dispatch({ type: CREATE_NEWS, payload: response.data });
    history.push('/');
};

export const fetchNews = () => async (dispatch) => {
    const response = await news.get('/news');

    dispatch({ type: FETCH_NEWS, payload: response.data });
};

export const fetchOneNews = (id) => async (dispatch) => {
    const response = await news.get(`/news/${id}`);

    dispatch({ type: FETCH_ONE_NEWS, payload: response.data });
};

export const deleteNews = (id) => async (dispatch) => {
    await news.delete(`/news/${id}`);

    dispatch({ type: DELETE_NEWS, payload: id });
};

export const editNews = (id, formValues) => async (dispatch) => {
    const response = await news.patch(`/news/${id}`, formValues);

    dispatch({ type: EDIT_NEWS, payload: response.data });
    history.push('/');
};

export const loginInput = login => {
    return {
        type: LOGIN_INPUT,
        payload: login
    };
};

export const passwordInput = password => {
    return {
        type: PASSWORD_INPUT,
        payload: password
    };
};

export const autorizationStatus = status => {
    if (status === true) {
        history.push('/');
    }
    
    return {
        type: AUTORIZATION_STATUS,
        payload: status
    };
};