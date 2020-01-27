import {
    SIGN_IN,
    LOGIN_INPUT,
    PASSWORD_INPUT,
    AUTORIZATION_STATUS
} from '../actions/types';

const passwordData = {
    isSignedIn: false,
    introducedLogin: '',
    introducedPassword: ''
};

export default (state = passwordData, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, ...action.payload };
        case LOGIN_INPUT:
            return { ...state, introducedLogin: action.payload };
        case PASSWORD_INPUT:
            return { ...state, introducedPassword: action.payload };
        case AUTORIZATION_STATUS: 
            return { ...state, isSignedIn: action.payload };
        default: 
            return state;
    }
};