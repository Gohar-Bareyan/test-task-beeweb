import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";

import {
    authUserError, authUserRequest, authUserSuccess, getAuthUserError, getAuthUserRequest, getAuthUserSuccess,
    logoutError, logoutRequest, logoutSuccess
} from "./action";

export const signupUser = (data) => {
    const { auth, email, password, navigate } = data;
    return async (dispatch) => {
        try {
            dispatch(authUserRequest());

            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
            await dispatch(authUserSuccess(userCredentials.user));
            await navigate("/dashboard");
        } catch (error) {
            const msg = 
            dispatch(authUserError(error.message ?? 'something went wrong'));
        }
    };
};

export const signinUser = (data) => {
    const { auth, email, password, navigate } = data;
    return async (dispatch) => {
        try {
            dispatch(authUserRequest());

            const user = await signInWithEmailAndPassword(auth, email, password);
            await dispatch(authUserSuccess(user));
            await navigate("/dashboard");
        } catch (error) {
            dispatch(authUserError(error.message ?? 'something went wrong'));
        }
    };
};

export const getAuthUser = (navigate) => {
    return async (dispatch) => {
        try {
            dispatch(getAuthUserRequest());

            auth.onAuthStateChanged(function(user) {
                if (user) {
                    dispatch(getAuthUserSuccess(user));
                } else {
                    navigate('/signin');
                    dispatch(getAuthUserError());
                }
              });
        } catch (error) {
            dispatch(getAuthUserError(error.message ?? 'something went wrong'));
        }
    }
};

export const logout = (data) => {
    const { navigate } = data;
    return async (dispatch) => {
        try {
            dispatch(logoutRequest());
            
            await signOut(auth);
            await dispatch(logoutSuccess())
            await navigate('/signin')
        } catch (error) {
            dispatch(logoutError(error.message ?? 'something went wrong'));
        };
    };
}