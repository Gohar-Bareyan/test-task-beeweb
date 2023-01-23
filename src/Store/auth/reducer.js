import { authState } from "./state";
import {
    AUTH_USER_ERROR, AUTH_USER_REQUEST, AUTH_USER_SUCCESS, GET_AUTH_USER_ERROR, GET_AUTH_USER_REQUEST, GET_AUTH_USER_SUCCESS,
    LOGOUT_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS
} from "./type";

export const userReducer = (state = authState, action) => {
    switch (action.type) {
        case AUTH_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case AUTH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            };
        case AUTH_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case GET_AUTH_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_AUTH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            };
        case GET_AUTH_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                user: {},
                loading: false
            };
        case LOGOUT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
};