import _ from 'lodash';
import {
    FETCH_NEWS,
    FETCH_ONE_NEWS,
    CREATE_NEWS,
    EDIT_NEWS,
    DELETE_NEWS
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_NEWS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case CREATE_NEWS:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_NEWS:
            return _.omit(state, action.payload);
        case FETCH_ONE_NEWS:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_NEWS:
            return { ...state, [action.payload.id]: action.payload };
        default: 
            return state;
    }
};