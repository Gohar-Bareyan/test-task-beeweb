import Auth from "../containers/auth";
import Dashboard from "../containers/dashboard";

const routes = [
    {
        path: "/signin",
        component: <Auth />
    },
    {
        path: "/signup",
        component: <Auth />
    },
    {
        path: "/dashboard",
        component: <Dashboard />
    },
];

export default routes;