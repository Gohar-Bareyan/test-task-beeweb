import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { auth } from "../../firebase";
import { schema } from "../../validation";
import AuthComponent from "../../components/auth";
import { signinUser, signupUser } from "../../Store/auth/api";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });
    
    useEffect(() => {
        reset()
    }, [location]);
    
    const signin = () => {
        dispatch(signinUser({ auth, email, password, navigate }));
    };

    const signup = () => {
        dispatch(signupUser({ auth, email, password, navigate }));
    };

    const signinOrSignup = () => {
        return location.pathname === "/signin" ? signin : signup;
    };

    const signinOrSignupText = () => {
        return location.pathname === "/signin" ? <h1>Log In</h1> : <h1>Sign Up</h1>;
    };

    const submitBtnText = () => {
        return location.pathname === "/signin" ? "Log In" : "Sign Up";
    };

    const signupText = () => {
        return location.pathname === "/signin" ? <p>Need an account? <Link to="/signup">Sign Up</Link></p> : <p>I already have an account? <Link to="/signin">Log In</Link></p>;
    };


    return (
        <AuthComponent
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            signinOrSignup={signinOrSignup}
            signinOrSignupText={signinOrSignupText}
            submitBtnText={submitBtnText}
            signupText={signupText}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
        />
    );
};

export default Auth;