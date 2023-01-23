import {
    AUTH_USER_ERROR, AUTH_USER_REQUEST, AUTH_USER_SUCCESS, GET_AUTH_USER_ERROR, GET_AUTH_USER_REQUEST, GET_AUTH_USER_SUCCESS,
    LOGOUT_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS
} from "./type";

export const authUserRequest = () => ({
    type: AUTH_USER_REQUEST
});

export const authUserSuccess = (user) => ({
    type: AUTH_USER_SUCCESS,
    payload: user
});

export const authUserError = (err) => ({
    type: AUTH_USER_ERROR,
    payload: err
});

export const getAuthUserRequest = () => ({
    type: GET_AUTH_USER_REQUEST
});

export const getAuthUserSuccess = (user) => ({
    type: GET_AUTH_USER_SUCCESS,
    payload: user
});

export const getAuthUserError = (err) => ({
    type: GET_AUTH_USER_ERROR,
    payload: err
});

export const logoutRequest = () => ({
    type: LOGOUT_REQUEST
});

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
});

export const logoutError = (err) => ({
    type: LOGOUT_ERROR,
    payload: err
});

