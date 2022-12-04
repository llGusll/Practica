import React from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
 
 
export const PrivateRoute = ({ children }) => {
     const {auth} = useSelector(state => state);
     console.log(auth);
 
     return auth.uid
         ? children
         : <Navigate to="/login" />
};
 
