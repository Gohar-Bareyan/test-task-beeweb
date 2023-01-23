import { useSelector } from "react-redux";
import { forwardRef, useEffect, useState } from "react";
import { Snackbar, Alert as MuiAlert } from '@mui/material';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const withError = (WrappedComponent) => {
    return (props) => {
        const userError = useSelector(state => state.error);

        const [showAlert, setShowAlert] = useState(false);

        useEffect(() => {
            if (userError) {
                setShowAlert(true);
            } else {
                setShowAlert(false);
            }
        }, [userError]);

        const handleHideAlert = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }

            setShowAlert(false);
        };

        return (
            <>
                {
                    userError && (
                        <Snackbar
                            open={showAlert}
                            autoHideDuration={6000}
                            onClose={handleHideAlert}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        >
                            <Alert
                                onClose={handleHideAlert}
                                severity="error"
                                sx={{ width: '100%' }}
                            >
                                {userError}
                            </Alert>
                        </Snackbar>
                    )
                }
                <WrappedComponent {...props} />
            </>
        )
    }
}

export default withError;


