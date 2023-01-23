import { useSelector } from "react-redux";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const withLoading = (WrappedComponent) => {
    return (props) => {
        const loading = useSelector(state => state.loading);

        return (
            <>
                {
                    loading && (
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={loading}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    )
                }
                <WrappedComponent {...props} />
            </>
        )
    }
}

export default withLoading;


