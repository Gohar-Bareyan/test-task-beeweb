import { compose } from "redux";
import { Button, TextField } from "@mui/material";

import withError from "../../HOC/withError";
import withLoading from "../../HOC/withLoading";

import styles from "./index.module.scss";

const AuthComponent = (props) => {
    const {
        email,
        password,
        setEmail,
        setPassword,
        signinOrSignup,
        signinOrSignupText,
        submitBtnText,
        signupText,
        register,
        handleSubmit,
        errors
    } = props;

    return (
        <div className={styles.login_containter}>
            <form onSubmit={handleSubmit(signinOrSignup())} className={styles.form}>
                {signinOrSignupText()}
                <TextField
                    label="Enter your email"
                    variant="outlined"
                    type="text"
                    value={email}
                    {...register("email")}
                    onChange={e => setEmail(e.target.value)}
                    className={styles.email_input}
                />
                {errors.email && <span className={styles.errors}>{errors.email.message}</span>}
                <TextField
                    label="Enter your password"
                    variant="outlined"
                    type="password"
                    value={password}
                    {...register("password")}
                    onChange={e => setPassword(e.target.value)}
                    className={styles.pass_input}
                />
                {errors.password && <span className={styles.errors}>{errors.password.message}</span>}
                <Button variant="contained" type="submit">{submitBtnText()}</Button>
                {signupText()}
            </form>
        </div>
    );
};

export default compose(
    withError,
    withLoading
)(AuthComponent);