import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from '../components/login/Login';
import { DashboardRoutes } from "./DashboardRoutes";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { startLoadingResuTs } from "../actions/test";

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setchecking] = useState(true);
    const [isLoggeIn, setisLoggeIn] = useState(false);

    useEffect(() => {

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {

                dispatch(login(user.uid, user.displayName));
                setisLoggeIn(true);

                dispatch(startLoadingResuTs(user.uid));
                
            } else {
                setisLoggeIn(false);
            }

            setchecking(false);
        })

    }, [dispatch, setchecking, setisLoggeIn])

    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }


    return (
        <BrowserRouter>

            <Routes>

                <Route path="/login" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                } />

            </Routes>
        </BrowserRouter>
    )
}
