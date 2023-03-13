import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = () => {
    if(window.localStorage.getItem("token"))
        return <Navigate to="/"/>

        return <Outlet/>
}

export default AuthRoutes;