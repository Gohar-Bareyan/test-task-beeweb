import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import routes from "./routes";

const Routers = () => {
    return (
        <Router>
            <Routes>
                {
                    routes.map(route => {
                        return <Route path={route.path} element={route.component} key={route.path} />
                    })
                }

                <Route path="/*" element={<Navigate to="/signin" />} />
            </Routes>
        </Router >
    );
};

export default Routers;