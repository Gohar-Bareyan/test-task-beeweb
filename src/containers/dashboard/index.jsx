import { useEffect, useMemo, useState, useCallback } from "react";
import { createEditor } from 'slate';
import { withReact } from 'slate-react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Leaf } from "../../Slate/Leaf";
import { Element } from "../../Slate/Element";
import { getAuthUser, logout } from "../../Store/auth/api";
import { INITIAL_VALUE } from "../../constants";
import DashboardComponent from "../../components/dashboard";

import 'material-icons/iconfont/material-icons.css';

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [value, setValue] = useState(INITIAL_VALUE);

    useEffect(() => {
        dispatch(getAuthUser(navigate))
    }, []);
    
    const renderElement = useCallback(props => <Element {...props} />, []);
    const renderLeaf = useCallback(props => <Leaf {...props} />, []);
    const editor = useMemo(() => withReact(createEditor()), []);

    const handleLogout = () => {
        dispatch(logout({navigate}));
    };

    return (
        <DashboardComponent
            value={value}
            editor={editor}
            setValue={setValue}
            renderLeaf={renderLeaf}
            renderElement={renderElement}
            handleLogout={handleLogout}
        />
    );
};

export default Dashboard;