import { Navigate } from 'react-router-dom';
import React from "react";
import MainPage from "./components/MainPage";

const routes = [
    {
        path: '/app',
        element: <MainPage />,
        children: [
            { path: '/login', element: <Navigate to="/app/login" /> },
            { path: '/', element: <Navigate to="/app/login" /> },
        ]
    },
    {
        path: '/',
        element: <MainPage />,
        children: [
            { path: '/', element: <Navigate to="/app/login" /> }
        ]
    }
];

export default routes;