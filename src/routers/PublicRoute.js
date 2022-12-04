import React from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
 
 
export const PublicRoute = ({ children }) => {
     const {auth} = useSelector(state => state);
     console.log(auth);
 
     return auth.uid
         ? <Navigate to="/inicio" />
         : children
};